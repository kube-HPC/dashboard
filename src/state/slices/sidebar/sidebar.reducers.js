export const toggle = state => {
  state.isOpen = !state.isOpen;
};

export const setValue = (state, { payload }) => {
  state.value = payload;
};
