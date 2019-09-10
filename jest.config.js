module.exports = {
  testEnvironment: "node",
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test).js"],
  moduleDirectories: ["node_modules"]
};
