import { NOTIFICATIONS } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import jobsSlice from '../jobs';
import pipelineSlice from '../pipelines';
import { add, remove } from './notifications.reducers';

const {
  thunks: { rerunRaw, stopPipeline, pausePipeline, resumePipeline },
} = pipelineSlice;

const {
  thunks: { downloadResults },
} = jobsSlice;

const { components } = NOTIFICATIONS;

const initialState = { notifications: [], id: 0 };

const addNotification = (state, component) => {
  state.notifications.push([state.id, component]);
  state.id++;
};

const notifications = createSlice({
  name: `notifications`,
  initialState,
  reducers: { add, remove },
  extraReducers: {
    [rerunRaw.fulfilled]: (state, { meta: { arg } }) => {
      addNotification(state, components.pipeline.rerun(arg));
    },
    [downloadResults.pending]: (state, { meta: { arg } }) => {
      addNotification(state, components.jobs.downloadResults(arg));
    },
    [stopPipeline.fulfilled]: (state, { meta: { arg } }) => {
      addNotification(state, components.pipeline.stopPipeline(arg));
    },
    [pausePipeline.fulfilled]: (state, { meta: { arg } }) => {
      addNotification(state, components.pipeline.pause(arg));
    },
    [resumePipeline.fulfilled]: (state, { meta: { arg } }) => {
      addNotification(state, components.pipeline.resume(arg));
    },
  },
});

export default notifications;
