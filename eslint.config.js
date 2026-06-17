import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "reports/**",
      "node_modules/**"
    ]
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    }
  }
];