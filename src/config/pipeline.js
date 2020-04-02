const name = `pipeline`;

const pipeline = {
  STATE: {
    name,
    rerunRaw: `${name}/rerunRaw`,
  },
  URL: {
    execRaw: `exec/raw`,
  },
};

export default pipeline;
