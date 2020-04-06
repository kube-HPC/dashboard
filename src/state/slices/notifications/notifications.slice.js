import { Text } from '@atoms';
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import jobsSlice from '../jobs';
import pipelineSlice from '../pipelines';
import { add, remove } from './notifications.reducers';

const {
  thunks: { rerunRaw },
} = pipelineSlice;

const {
  thunks: { downloadResults },
} = jobsSlice;

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
    [rerunRaw.pending]: (state, { meta }) => {
      addNotification(
        state,
        <>
          Scheduling pipeline rerun: <Text bold>{meta.arg.name}</Text>
        </>,
      );
    },
    [rerunRaw.fulfilled]: (state, { payload }) => {
      addNotification(
        state,
        <>
          Pipeline rerun started with job ID: <Text bold>{payload.jobId}</Text>
        </>,
      );
    },
    [downloadResults.pending]: (state, { meta }) => {
      addNotification(
        state,
        <>
          Downloading job results: <Text bold>{meta.arg.jobId}</Text>
        </>,
      );
    },
  },
});

export default notifications;
