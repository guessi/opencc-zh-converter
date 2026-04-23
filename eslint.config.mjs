import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["out", "dist", "src/dict", "**/*.d.ts"],
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        console: "readonly",
        process: "readonly",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);
