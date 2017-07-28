var recast = require('recast')
var esprima = require('./esprima') // modified esprima by facebook team

module.exports = function (code) {
    var ast = recast.parse(code, { esprima: esprima })

    recast.visit(ast, 
        {
            visitJSXElement: function (property) {
                var templateStr = recast.print(property.value).code
                templateStr = templateStr.replace(/(\r\n|\n|\r)/g, '\n')
                templateStr = templateStr.replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // {/* comment */} multiline
                templateStr = templateStr.replace(/<(.*)className="(.*)"(.*)>/gi, "<$1class=\"$2\"$3>")
                property.value = recast.types.builders.literal(templateStr)
                return this.traverse(property)
            }
        }
    )

    return recast.print(ast).code
}
