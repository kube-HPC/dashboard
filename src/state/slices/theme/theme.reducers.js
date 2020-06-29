import { palettes } from '@styles';
import set from 'lodash.set';

export const setProperty = (state, { payload }) => {
  const { path, value } = payload;
  set(state.colors, path, value);
};

export const setPalette = (state, { payload: path }) => palettes[path];
