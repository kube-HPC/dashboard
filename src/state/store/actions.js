import {
  adminPanelSlice,
  experimentsSlice,
  jobsSlice,
  scrollSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  experiment: experimentsSlice.actions,
  adminPanel: adminPanelSlice.actions,
  jobs: jobsSlice.actions,
  scroll: scrollSlice.actions,
};

export default actions;
