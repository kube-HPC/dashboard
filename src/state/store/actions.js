import { adminPanelSlice, experimentsSlice, sidebarSlice, socketSlice } from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  experiment: experimentsSlice.actions,
  adminPanel: adminPanelSlice.actions,
};

export default actions;
