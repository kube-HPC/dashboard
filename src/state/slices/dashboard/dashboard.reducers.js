import { LOCAL_STORAGE } from '@constants';
import { setLocalStorageItem } from '@utils';

export const toggleJobEye = (state, { payload: jobId }) => {
  if (state.eyes.jobs.includes(jobId)) {
    state.eyes.jobs = state.eyes.jobs.filter(job => job !== jobId);
  } else {
    state.eyes.jobs.push(jobId);
  }

  setLocalStorageItem(LOCAL_STORAGE.EYES, state.eyes.jobs);
};

export const tagJob = (state, { payload: { jobId, tag } }) => {
  state.tags.jobs[jobId] = tag;
};

export const removeJobTag = (state, { payload: jobId }) => {
  delete state.tags.jobs[jobId];
};
