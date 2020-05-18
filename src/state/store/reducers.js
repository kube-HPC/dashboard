import { combineReducers } from '@reduxjs/toolkit';
import {
  dashboardSlice,
  experimentsSlice,
  jobsSlice,
  notificationsSlice,
  panelSlice,
  pipelinesSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const { reducer: dashboard } = dashboardSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: notifications } = notificationsSlice;
const { reducer: panel } = panelSlice;
const { reducer: pipelines } = pipelinesSlice;
const { reducer: socket } = socketSlice;
const { reducer: theme } = themeSlice;

const reducer = combineReducers({
  dashboard,
  experiments,
  jobs,
  notifications,
  panel,
  pipelines,
  socket,
  theme,
});

export default reducer;
