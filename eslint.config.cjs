// Load legacy config and convert to flat config shape.
const path = require("path");
const legacyPath = path.resolve(__dirname, ".eslintrc.cjs");
let legacy = {};
try {
  legacy = require(legacyPath) || {};
} catch (e) {
  legacy = {};
}

let globals = {};
try {
  const envs = require("eslint/conf/environments");
  if (legacy.env) {
    for (const [envName, enabled] of Object.entries(legacy.env)) {
      if (enabled && envs[envName] && envs[envName].globals) {
        Object.assign(globals, envs[envName].globals || envs[envName]);
      }
    }
  }
} catch (e) {
  globals = {};
}

module.exports = [
  {
    ignores: ["dist/**", "node_modules/**", ".parcel-cache/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion:
        (legacy.parserOptions && legacy.parserOptions.ecmaVersion) || 2021,
      sourceType:
        (legacy.parserOptions && legacy.parserOptions.sourceType) || "module",
      globals,
    },
    // merge legacy rules and ensure underscore-prefixed args are ignored for no-unused-vars
    rules: Object.assign({}, legacy.rules || {}, {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],
    }),
  },
];
