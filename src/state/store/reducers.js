import { combineReducers } from '@reduxjs/toolkit';
import {
  experimentsSlice,
  jobsSlice,
  notificationsSlice,
  panelSlice,
  pipelinesSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: panel } = panelSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: pipelines } = pipelinesSlice;
const { reducer: notifications } = notificationsSlice;

const reducer = combineReducers({
  sidebar,
  socket,
  experiments,
  panel,
  jobs,
  pipelines,
  notifications,
});

export default reducer;
