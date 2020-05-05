import { combineReducers } from '@reduxjs/toolkit';
import {
  dashboardSlice,
  experimentsSlice,
  jobsSlice,
  notificationsSlice,
  panelSlice,
  pipelinesSlice,
  sidebarSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const { reducer: dashboard } = dashboardSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: notifications } = notificationsSlice;
const { reducer: panel } = panelSlice;
const { reducer: pipelines } = pipelinesSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: socket } = socketSlice;
const { reducer: theme } = themeSlice;

const reducer = combineReducers({
  dashboard,
  experiments,
  jobs,
  notifications,
  panel,
  pipelines,
  sidebar,
  socket,
  theme,
});

export default reducer;
