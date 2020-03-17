const aliases = (prefix = 'src') => ({
  '@components': `${prefix}/components`,
  '@icons': `${prefix}/components/atoms/Icons`,
  '@hooks': `${prefix}/hooks`,
  '@config': `${prefix}/config`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
  '@constants': `${prefix}/constants`,
  '@queries': `${prefix}/queries`,
  '@store': `${prefix}/store`,
  '@reducers': `${prefix}/state/slices/reducers`,
  '@slices': `${prefix}/state/slices`,
});

module.exports = aliases;
