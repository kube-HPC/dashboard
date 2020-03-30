const graph = {
  direction: {
    LR: `LR`,
    UD: `UD`,
  },
  defaultOptions: {
    hierarchical: true,
    visible: true,
    physics: false,
    direction: `LR`,
  },
  types: {
    STATUS: {
      NOT_STARTED: `notStarted`,
      RUNNING: `running`,
      COMPLETED: `completed`,
      SUCCEED: `succeed`,
      FAILED: `failed`,
      CREATING: `creating`,
      PENDING: `pending`,
      SKIPPED: `skipped`,
    },
    BATCH: {
      NOT_STARTED: `batchNotStarted`,
      RUNNING: `batchRunning`,
      COMPLETED: `batchCompleted`,
      ERRORS: `batchErrors`,
    },
    SINGLE: {
      NOT_STARTED: `notStarted`,
      RUNNING: `running`,
      COMPLETED: `completed`,
    },
    EDGE: {
      WAIT_ANY: `waitAny`,
      ALGORITHM_EXECUTION: `algorithmExecution`,
      NONE: `none`,
    },
  },
};

export default graph;
