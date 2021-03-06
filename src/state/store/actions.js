// @flow
import {
  dashboardSlice,
  errorsSlice,
  jobsSlice,
  notificationsSlice,
  pipelinesSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const actions = {
  errors: errorsSlice.actions,
  dashboard: dashboardSlice.actions,
  jobs: { ...jobsSlice.actions, ...jobsSlice.thunks },
  notifications: notificationsSlice.actions,
  pipelines: { ...pipelinesSlice.actions, ...pipelinesSlice.thunks },
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  theme: themeSlice.actions,
};

export default actions;
