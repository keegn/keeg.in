module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', //
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'all',
            semi: false,
            singleQuote: true,
            printWidth: 120,
          },
        ],
      },
    },
  ],
}

// module.exports = {
//   parser: `@typescript-eslint/parser`,
//   extends: [
//     'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//     'prettier/@typescript-eslint',
//   ],
//   plugins: ['@typescript-eslint', 'prettier'],
//   parserOptions: {
//     ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
//     sourceType: 'module', // Allows for the use of imports
//   },
//   env: {
//     browser: true,
//     node: true,
//   },
//   rules: {
//     quotes: 'off',
//     '@typescript-eslint/quotes': [
//       2,
//       'backtick',
//       {
//         avoidEscape: true,
//       },
//     ],
//     indent: ['error', 2, { SwitchCase: 1 }],
//     'prettier/prettier': [
//       'error',
//       {
//         trailingComma: 'es5',
//         semi: true,
//         singleQuote: true,
//         printWidth: 120,
//       },
//     ],
//   },
// }
