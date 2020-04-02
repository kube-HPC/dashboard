export const setValue = (state, { payload }) => {
  state.value = payload;
};

export const toggle = state => {
  state.expanded = !state.expanded;
};
