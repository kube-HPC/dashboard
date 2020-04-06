// let indexCount = 0;

export const add = (state, { payload }) => {
  state.notifications.push([state.id, payload]);
  state.id++;
  // indexCount++;
};

export const remove = (state, { payload: index }) => {
  state.notifications.splice(
    state.notifications.findIndex(([i]) => i === index),
    1,
  );
};
