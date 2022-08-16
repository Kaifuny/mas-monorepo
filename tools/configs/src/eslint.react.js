module.exports = {
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react-redux/recommended",
        require.resolve("./eslint.base")
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/destructuring-assignment": ["error", "always"],
        "react/forbid-component-props": "error",
        "react/function-component-definition": ["error", { namedComponents: "arrow-function" }]
    },
    overrides: [
        {
            files: ["*.tsx"],
            rules: {
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: "default",
                        format: ["strictCamelCase"],
                        leadingUnderscore: "allow",
                        trailingUnderscore: "allow"
                    },
                    {
                        selector: "typeLike",
                        format: ["PascalCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    // enforce interface to start with I, such as IPojo
                    {
                        selector: "interface",
                        format: ["PascalCase"],
                        custom: {
                            regex: "^I[A-Z]",
                            match: true
                        }
                    },
                    // A global const function (arrow function) is considered to be a react component
                    {
                        selector: "variable",
                        types: ["function"],
                        modifiers: ["global", "const"],
                        format: ["StrictPascalCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    }
                ]
            }
        }
    ]
};
