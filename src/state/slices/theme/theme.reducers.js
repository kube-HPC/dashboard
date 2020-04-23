import set from 'lodash.set';

export const setProperty = (state, { payload }) => {
  const { path, value } = payload;
  set(state, path, value);
};
