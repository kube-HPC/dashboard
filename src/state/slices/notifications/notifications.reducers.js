let indexCount = 0;

export const add = (state, { payload }) => {
  indexCount++;
  state.push([indexCount, payload]);
};

export const remove = (state, { payload: index }) => {
  state.splice(
    state.findIndex(([i]) => i === index),
    1,
  );
};
