/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  transform: { "^.+\\.js$": "babel-jest" },
  testPathIgnorePatterns: ["/node_modules/", "/tests/e2e/"],
};