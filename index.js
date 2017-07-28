var recast = require('recast')
var esprima = require('./esprima') // modified esprima by facebook team

/**
 * Convert JSX element in ecmascript code string to double quoted html string in the code.
 * Forked from angular-jsx https://github.com/thesam/angular-jsx
 * @example
 * let jsxHtml = require('jsx-html');
 * let code = 'let template = <div>hello</div>'
 * jsxHtml(code)
 * // returns 'let template = "<div>hello</div>"'
 * @param {string} - jsx element contained in ecmascript code string.
 * @returns {string} double quoted html strings converted from JSX element in ecmascript.
 */
function jsxToHtml(code) {
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

module.exports = jsxToHtml
