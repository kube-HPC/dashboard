const mapper = {
  addPipeline: `Add Pipeline`,
  addAlgorithm: `Add Algorithm`,
  runRawPipeline: `Run Raw Pipeline`,
  addDebug: `Add Debug`,
};

const values = Object.values(mapper);

const topBarConfig = {
  leftIcons: [`filter`],
  rightIcons: [`moon`, `settings`, `warning`],
  mapper,
  values,
};

export default topBarConfig;
