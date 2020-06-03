const path = require('path');
const alias = require(`../src/constants/aliases`);
const fromEntries = require('object.fromentries');

const SRC = '../src';

const aliases = alias(SRC);

if (!Object.fromEntries) {
  fromEntries.shim();
}

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = ({ config }) => {
  // https://www.gatsbyjs.org/docs/visual-testing-with-storybook/

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  // allow storybook to resolve imports relative to ../src, to conform with gatsby-plugin-resolve-src
  config.resolve.modules = [path.resolve(__dirname, SRC), 'node_modules'];

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static
    // queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];
  config.resolve.alias = resolvedAliases;
  config.resolve.extensions = ['.js'];

  return config;
};
