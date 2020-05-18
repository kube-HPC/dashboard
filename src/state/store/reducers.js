import { combineReducers } from '@reduxjs/toolkit';
import {
  dashboardSlice,
  experimentsSlice,
  jobsSlice,
  notificationsSlice,
  pipelinesSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const { reducer: dashboard } = dashboardSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: notifications } = notificationsSlice;
const { reducer: pipelines } = pipelinesSlice;
const { reducer: socket } = socketSlice;
const { reducer: theme } = themeSlice;

const reducer = combineReducers({
  dashboard,
  experiments,
  jobs,
  notifications,
  pipelines,
  socket,
  theme,
});

export default reducer;
