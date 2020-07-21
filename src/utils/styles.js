import { THEME } from '@constants';
import { withProp } from 'styled-tools';

export const onMode = (lightProp, darkProp) =>
  withProp(`theme.${THEME.value.mode}`, mode => (mode === THEME.mode.light ? lightProp : darkProp));
