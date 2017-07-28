<a name="jsxToHtml"></a>

## jsxToHtml(code) ⇒ <code>string</code>
Convert JSX element in ecmascript code string to double quoted html string in the code.
Forked from angular-jsx https://github.com/thesam/angular-jsx

**Kind**: global function  
**Returns**: <code>string</code> - double quoted html strings converted from JSX element in ecmascript.  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | jsx element contained in ecmascript code string. |

**Example**  
```js
let jsxHtml = require('jsx-html');
let code = 'let template = <div>hello</div>'
jsxHtml(code)
// returns 'let template = "<div>hello</div>"'
```

## Installation

```sh
npm install jsx-html --save
```


## Tests

```sh
npm install
npm test
```

## Dependencies

- [recast](https://github.com/benjamn/recast): JavaScript syntax tree transformer, nondestructive pretty-printer, and automatic source map generator

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown): Generates markdown API documentation from jsdoc annotated source code
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework


## License

MIT
