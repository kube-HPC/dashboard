import { adminPanelSlice, experimentsSlice, jobsSlice, sidebarSlice, socketSlice } from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  experiment: experimentsSlice.actions,
  adminPanel: adminPanelSlice.actions,
  jobs: jobsSlice.actions,
};

export default actions;
