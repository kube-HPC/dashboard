const aliases = (prefix = 'src') => ({
  '@components': `${prefix}/components`,
  '@icons': `${prefix}/components/atoms/Icons`,
  '@hooks': `${prefix}/hooks`,
  '@config': `${prefix}/config`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
  '@constants': `${prefix}/constants`,
  '@queries': `${prefix}/queries`,
  '@reducers': `${prefix}/state/store/reducers`,
  '@actions': `${prefix}/state/store/actions`,
  '@slices': `${prefix}/state/slices`,
});

module.exports = aliases;
