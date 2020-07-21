export const add = (state, { payload }) => {
  state.notifications.push([state.id, payload]);
  state.id++;
};

export const remove = (state, { payload: index }) => {
  state.notifications.splice(
    state.notifications.findIndex(([i]) => i === index),
    1,
  );
};
