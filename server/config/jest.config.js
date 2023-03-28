const path = require("path");

module.exports = {
  testEnvironment: "node",
  rootDir: path.join(__dirname, ".."),
  testMatch: ["<rootDir>/__tests__/**/*.test.js"],
  setupFilesAfterEnv: ["./config/jest.setup.js"],
};
