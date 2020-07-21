const graph = {
  idSeparator: `->`,
  direction: {
    LR: `LR`,
    UD: `UD`,
  },
  defaultOptions: {
    hierarchical: true,
    visible: true,
    direction: `LR`,
    isLightTheme: true,
  },
  types: {
    BATCH: {
      NOT_STARTED: `batchNotStarted`,
      RUNNING: `batchRunning`,
      COMPLETED: `batchCompleted`,
      ERRORS: `batchErrors`,
    },
  },
};

export default graph;
