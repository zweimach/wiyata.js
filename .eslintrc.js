module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  overrides: [
    {
      files: "**/*.test.js",
      extends: ["plugin:jest/recommended", "plugin:jest/style"]
    }
  ]
};
