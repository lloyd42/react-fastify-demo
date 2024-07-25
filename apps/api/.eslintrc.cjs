module.exports = {
  root: true,
  env: { browser: true },
  plugins: ["@typescript-eslint/eslint-plugin"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
  ],
};
