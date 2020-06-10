import { combineReducers } from '@reduxjs/toolkit';
import {
  dashboardSlice,
  jobsSlice,
  notificationsSlice,
  pipelinesSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const { reducer: dashboard } = dashboardSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: notifications } = notificationsSlice;
const { reducer: pipelines } = pipelinesSlice;
const { reducer: socket } = socketSlice;
const { reducer: theme } = themeSlice;

const reducer = combineReducers({
  dashboard,
  jobs,
  notifications,
  pipelines,
  socket,
  theme,
});

export default reducer;
