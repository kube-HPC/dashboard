const mapper = {
  addPipeline: `Add Pipeline`,
  addAlgorithm: `Add Algorithm`,
  runRawPipeline: `Run Raw Pipeline`,
  addDebug: `Add Debug`,
};

const values = Object.values(mapper);

const toActionIcons = name => ({ name });

const topBarConfig = {
  leftIcons: [`filter`, `search`].map(toActionIcons),
  rightIcons: [`signal`, `moon`, `settings`, `warning`].map(toActionIcons),
  mapper,
  values,
};

export default topBarConfig;
