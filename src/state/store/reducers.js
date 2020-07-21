import { combineReducers } from '@reduxjs/toolkit';
import {
  dashboardSlice,
  errorsSlice,
  jobsSlice,
  notificationsSlice,
  pipelinesSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const { reducer: dashboard } = dashboardSlice;
const { reducer: errors } = errorsSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: notifications } = notificationsSlice;
const { reducer: pipelines } = pipelinesSlice;
const { reducer: socket } = socketSlice;
const { reducer: theme } = themeSlice;

const reducer = combineReducers({
  dashboard,
  errors,
  jobs,
  notifications,
  pipelines,
  socket,
  theme,
});

export default reducer;
