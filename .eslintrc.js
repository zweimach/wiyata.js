module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: ["jest"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
