export const setValue = (state, { payload }) => {
  state.panel.value = payload;
};

export const toggle = state => {
  state.expanded = !state.expanded;
};
