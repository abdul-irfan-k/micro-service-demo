import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    { files: ["**/*.{mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,

    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
        ignores: ["**/dist/*", "**/test/*", '**/*.js']
    },
    {
        "rules": {
            "semi": "warn",
            "@typescript-eslint/semi": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

        }
    }
];