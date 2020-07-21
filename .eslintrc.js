const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'react-app'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['flowtype', 'react', 'react-hooks'],
  rules: {
    'jsx-a11y/href-no-hash': OFF,
    'react/prop-types': OFF,
    'no-unused-vars': ERROR,
    // Backtick only :-)
    quotes: [ERROR, 'backtick', {allowTemplateLiterals: true}],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
