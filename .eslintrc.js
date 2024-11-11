module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "react-app", "react-app/jest"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "import/order": [
          "warn",
          {
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: false,
            },
            groups: ["builtin", "external", "internal", "sibling"],
            pathGroups: [
              {
                pattern: "@recnet-api/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "@recnet/recnet-web/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "@recnet/recnet-jwt",
                group: "internal",
                position: "after",
              },
              {
                pattern: "@recnet/recnet-date-fns",
                group: "internal",
                position: "after",
              },
              {
                pattern: "@recnet/recnet-api-model",
                group: "internal",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
      },
    },
  ],
};
