export const toggleJobEye = (state, { payload: jobId }) => {
  state.eyes.jobs[jobId] = {
    isControlled: true,
    isShowDetails: !state.eyes.jobs[jobId].isShowDetails,
  };
};

export const tagJob = (state, { payload: { jobId, tag } }) => {
  state.tags.jobs[jobId] = tag;
};

export const removeJobTag = (state, { payload: jobId }) => {
  delete state.tags.jobs[jobId];
};
