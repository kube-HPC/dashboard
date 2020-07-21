const path = require("path");
const alias = require(`../src/config/aliases`);

const SRC = "../src";
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, SRC));
  config.resolve.alias = resolvedAliases;
  return config;
};
