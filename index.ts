/* eslint-disable import/no-import-module-exports */
import { Linter } from "eslint";

import BaseConfig = Linter.BaseConfig;

const config: BaseConfig = {
  // eslint-configs
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "plugin:import/typescript",
    // "standard-with-typescript", -- not avilable for @typescript-eslint/eslint-plugin v5 yet
  ],
  // eslint-plugins
  plugins: ["@typescript-eslint", "deprecation"],
  parser: "@typescript-eslint/parser",
  // Enabling/disabling/changing level of rules
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/extensions": "off",
    "no-negated-condition": "off",
    "import/no-unresolved": "error",
    "deprecation/deprecation": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error"
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        // Always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
};

module.exports = config;
