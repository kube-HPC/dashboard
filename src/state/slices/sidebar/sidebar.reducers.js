export const toggle = state => {
  state.visible = !state.visible;
};

export const setValue = (state, { payload }) => {
  state.value = payload;
};
