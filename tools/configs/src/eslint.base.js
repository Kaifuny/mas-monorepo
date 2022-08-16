module.exports = {
    extends: [
        "prettier",
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        require.resolve("./restricted-paths")
    ],
    plugins: ["@typescript-eslint", "import"],
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
            // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
            node: {},
            typescript: {}
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        }
    },
    reportUnusedDisableDirectives: true,
    rules: {
        /**
         * IMPORTANT eslint override
         */
        // #region
        "@typescript-eslint/brace-style": ["error"],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never"
            }
        ],
        "@typescript-eslint/lines-between-class-members": ["error", "always"],
        "@typescript-eslint/no-array-constructor": ["error"],
        "@typescript-eslint/no-dupe-class-members": ["error"],
        "@typescript-eslint/no-empty-function": [
            "error",
            { allow: ["private-constructors", "protected-constructors", "overrideMethods"] }
        ],
        "@typescript-eslint/no-extra-parens": ["error"],
        "@typescript-eslint/no-redeclare": ["error", { ignoreDeclarationMerge: true }],
        "@typescript-eslint/no-shadow": [
            "error",
            {
                ignoreTypeValueShadow: true,
                ignoreFunctionTypeParameterNameValueShadow: true
            }
        ],
        "@typescript-eslint/no-throw-literal": [
            "error",
            {
                allowThrowingAny: false,
                allowThrowingUnknown: false
            }
        ],
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/object-curly-spacing": ["error"],
        "@typescript-eslint/return-await": ["error", "never"],
        "@typescript-eslint/semi": ["error"],
        // #endregion

        "no-param-reassign": ["error", { props: false }],
        "no-restricted-syntax": "off",
        "no-restricted-exports": "off",
        "no-nested-ternary": "off",
        /**
         * imports
         */
        // #region
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal", "sibling", "parent", "index", "type", "object"],
                "newlines-between": "always-and-inside-groups"
            }
        ],
        "import/prefer-default-export": "error",
        "import/no-useless-path-segments": [
            "error",
            {
                noUselessIndex: true
            }
        ],
        "import/no-relative-parent-imports": "error",
        "import/no-relative-packages": "error",
        "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
        "import/no-self-import": "error",
        // #endregion
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array",
                readonly: "array"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-unused-vars": ["error", { destructuredArrayIgnorePattern: "^_" }],
        "@typescript-eslint/class-literal-property-style": ["error", "fields"],
        "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
        "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            { assertionStyle: "as", objectLiteralTypeAssertions: "never" }
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-exports": [
            "error",
            { fixMixedExportsWithInlineTypeSpecifier: false }
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports", disallowTypeAnnotations: true }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit",
                overrides: {
                    accessors: "explicit",
                    constructors: "no-public",
                    methods: "explicit",
                    properties: "explicit",
                    parameterProperties: "explicit"
                }
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                allowArgumentsExplicitlyTypedAsAny: false,
                allowDirectConstAssertionInArrowFunctions: true,
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false
                },
                multilineDetection: "brackets"
            }
        ],
        // respect to default member-ordering
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["strictCamelCase"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow"
            },
            {
                selector: "variable",
                format: ["strictCamelCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
                trailingUnderscore: "allow"
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "did", "will"]
            },
            {
                selector: "typeLike",
                format: ["StrictPascalCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid"
            },
            {
                selector: "enumMember",
                format: ["UPPER_CASE"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid"
            },
            // Sometimes you might want to allow destructured properties to retain their original name,
            // even if it breaks your naming convention.
            {
                selector: "variable",
                modifiers: ["destructured"],
                format: null
            },
            // enforce interface to start with I, such as IPojo
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false
                }
            }
        ],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": [
            "error",
            { ignoreArrowShorthand: true, ignoreVoidOperator: false }
        ],
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true, fixToUnknown: false }],
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                allowConstructorOnly: true,
                allowEmpty: false,
                allowStaticOnly: false,
                allowWithDecorator: false
            }
        ],
        "@typescript-eslint/no-floating-promises": [
            "error",
            {
                ignoreVoid: false,
                ignoreIIFE: false
            }
        ],
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implicit-any-catch": "warn",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-invalid-void-type": [
            "error",
            {
                allowInGenericTypeArguments: true,
                allowAsThisParameter: false
            }
        ],
        "@typescript-eslint/no-meaningless-void-operator": [
            "error",
            {
                checkNever: false
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": [
            "error",
            {
                // actually allows all
                allows: [
                    "readonly",
                    "private",
                    "protected",
                    "public",
                    "private readonly",
                    "protected readonly",
                    "public readonly"
                ]
            }
        ],
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: false,
                allowedNames: []
            }
        ],
        "@typescript-eslint/no-type-alias": [
            "error",
            {
                allowAliases: "in-unions-and-intersections",
                allowCallbacks: "always",
                allowConditionalTypes: "always",
                allowConstructors: "never",
                allowLiterals: "always",
                allowMappedTypes: "always",
                allowTupleTypes: "always",
                allowGenerics: "always"
            }
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
            "error",
            {
                allowComparingNullableBooleansToTrue: true,
                allowComparingNullableBooleansToFalse: true
            }
        ],
        "@typescript-eslint/no-unnecessary-condition": [
            "error",
            {
                allowConstantLoopConditions: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
            }
        ],
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-useless-empty-export": "warn",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/parameter-properties": [
            "error",
            {
                allow: [
                    "readonly",
                    "private",
                    "protected",
                    "public",
                    "private readonly",
                    "protected readonly",
                    "public readonly"
                ]
            }
        ],
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": [
            "error",
            {
                allowBitwiseExpressions: true
            }
        ],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": [
            "error",
            {
                ignoreTernaryTests: false,
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true
            }
        ],
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "warn",
        "@typescript-eslint/promise-function-async": [
            "error",
            {
                allowedPromiseNames: ["Thenable"],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true
            }
        ],
        "@typescript-eslint/require-array-sort-compare": [
            "error",
            {
                ignoreStringArrays: true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": [
            "error",
            {
                checkCompoundAssignments: true,
                allowAny: false
            }
        ],
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                allowNumber: true,
                allowBoolean: false,
                allowAny: false,
                allowNullish: false,
                allowRegExp: false
            }
        ],
        "@typescript-eslint/sort-type-union-intersection-members": "off",
        "@typescript-eslint/strict-boolean-expressions": [
            "error",
            {
                allowString: true,
                allowNumber: true,
                allowNullableObject: true,
                allowNullableBoolean: false,
                allowNullableString: false,
                allowNullableNumber: false,
                allowAny: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
            }
        ],
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "error",
        "@typescript-eslint/unbound-method": [
            "error",
            {
                ignoreStatic: true
            }
        ],
        "@typescript-eslint/unified-signatures": "error"
    }
};
