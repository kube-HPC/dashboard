const graph = {
  direction: {
    LR: `LR`,
    UD: `UD`,
  },
  defaultOptions: {
    hierarchical: true,
    visible: true,
    direction: `LR`,
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
