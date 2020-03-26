export const select = (state, { payload }) => {
  state.selected = state.selected === payload ? null : payload;
};
