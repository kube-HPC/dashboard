export const setValue = (state, { payload }) => {
  state.adminPanel.value = payload;
};

export const toggle = state => {
  state.expanded = !state.expanded;
};
