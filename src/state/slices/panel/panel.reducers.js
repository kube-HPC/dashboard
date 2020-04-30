export const set = (state, { payload }) => {
  state.value = state.value === payload ? null : payload;
};

export const toggle = state => {
  state.expanded = !state.expanded;
};
