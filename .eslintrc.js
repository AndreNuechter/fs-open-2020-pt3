module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: [
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 11
    },
    rules: {
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        indent: ['error', 4],
        semi: ['error', 'always'],
        'eol-last': ['error', 'never'],
        'new-parens': ['error', 'never']
    }
};