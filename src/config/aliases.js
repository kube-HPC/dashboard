// Remember to update `jsconfig.json`

const aliases = (prefix = `src`) => ({
  "@actions": `${prefix}/state/store/actions`,
  "@atoms": `${prefix}/components/atoms`,
  "@molecules": `${prefix}/components/molecules`,
  "@organisms": `${prefix}/components/organisms`,
  "@templates": `${prefix}/components/templates`,
  "@components": `${prefix}/components`,
  "@config": `${prefix}/config`,
  "@constants": `${prefix}/constants`,
  "@hooks": `${prefix}/hooks`,
  "@icons": `${prefix}/components/atoms/Icons`,
  "@queries": `${prefix}/queries`,
  "@reducers": `${prefix}/state/store/reducers`,
  "@selectors": `${prefix}/state/selectors`,
  "@slices": `${prefix}/state/slices`,
  "@styles": `${prefix}/styles`,
  "@utils": `${prefix}/utils`,
  "@storybookHelpers": `../.storybook/helpers`,
});

module.exports = aliases;
