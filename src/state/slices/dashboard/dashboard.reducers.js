import { PANEL } from "@constants";

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

export const setJobsFilter = (state, { payload: { target, filter } }) => {
  state.filters.jobs[target] = filter;
};

export const setPanel = (state, { payload }) => {
  const prevPanel = state.panel.value;
  if (prevPanel === PANEL.jobs && payload === PANEL.jobs) {
    // Don't toggle on switching between jobs
    return;
  } else {
    state.panel.value = prevPanel === payload ? null : payload;
  }
};

export const togglePanel = (state) => {
  state.panel.expanded = !state.panel.expanded;
};

export const setLogSource = (state, { payload: source }) => {
  state.settings.logSource = source;
};
