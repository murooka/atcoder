module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",

    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",

    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "singleQuote": true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/order": ["warn", {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
    }],
  },
};
