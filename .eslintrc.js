module.exports = {
  env: { browser: false, node: true, es6: true, jest: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: { ecmaVersion: 2018, sourceType: "module" },
  rules: {
    "@typescript-eslint/no-explicit-any": ['off'],
    "@typescript-eslint/indent": ["off"],
    "@typescript-eslint/no-use-before-define": ["off"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true
      }
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true }
    ],
    "prettier/prettier": [
      "error",
      { singleQuote: true, trailingComma: "all", printWidth: 79 }
    ],
    "prefer-const": ["error", { destructuring: "all" }]
  }
};
