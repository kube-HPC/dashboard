import { NOTIFICATIONS } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import pipelineSlice from '../pipelines';
import { add, remove } from './notifications.reducers';

const {
  thunks: { rerunRaw },
} = pipelineSlice;

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
    [rerunRaw.fulfilled]: (state, { payload }) => {
      addNotification(state, NOTIFICATIONS.components(payload).jobRerun);
    },
  },
});

export default notifications;
