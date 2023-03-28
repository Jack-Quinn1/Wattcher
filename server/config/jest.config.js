const path = require("path");

module.exports = {
  testEnvironment: "node",
  rootDir: path.join(__dirname, ".."),
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
  setupFilesAfterEnv: ["./config/jest.setup.js"],
};
