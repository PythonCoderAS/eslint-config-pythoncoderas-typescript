/* eslint-disable import/no-import-module-exports */
import { Linter } from "eslint";
import BaseConfig = Linter.BaseConfig;

const config: BaseConfig = {
  // eslint-configs
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "standard-with-typescript",
  ],
  // eslint-plugins
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  // Enabling/disabling/changing level of rules
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};

module.exports = config;
