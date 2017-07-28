module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "files": ["esprima.js"],
            "rules": { 
                "no-func-assign": 0,
                "no-unused-vars": 0,
            },
            "globals": {
                "define": true,
            }
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": 0,
        "semi": 0,
    },
    "globals": {
        "it": true,
        "describe": true,
        "before": true,
    },
};
