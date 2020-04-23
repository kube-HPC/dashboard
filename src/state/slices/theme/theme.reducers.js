import { pallettes } from '@styles';
import set from 'lodash.set';

export const setProperty = (state, { payload }) => {
  const { path, value } = payload;
  set(state.colors, path, value);
};

export const setPallette = (state, { payload }) => pallettes[payload];
