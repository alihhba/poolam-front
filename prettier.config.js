// prettier.config.js
module.exports = {
    printWidth: 10,           // force wrapping after 80 chars
    jsxSingleQuote: false,
    singleQuote: true,
    trailingComma: 'es5',
    semi: true,

    // key options for JSX props formatting 👇
    jsxBracketSameLine: false,
    bracketSameLine: false,   // ensures closing bracket is on its own line
    jsxSingleAttributePerLine: true, // each prop on a new line
};
