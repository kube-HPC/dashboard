const name = `pipeline`;

const pipeline = {
  STATE: {
    name,
    rerunRaw: `${name}/rerunRaw`,
    stop: `${name}/stop`,
    resume: `${name}/resume`,
    pause: `${name}/pause`,
  },
  URL: {
    execRaw: `exec/raw`,
    execStop: `exec/stop`,
    execResume: `exec/resume`,
    execPause: `exec/pause`,
  },
};

export default pipeline;
