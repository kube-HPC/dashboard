import { THEME } from '@constants';
import { COLORS } from './colors';
import gradients from './gradients.styles';

const { pallette } = THEME;

const pallettes = {
  [pallette.default]: {
    background: gradients.cloudyKnoxville,
    colors: COLORS,
  },
};

export default pallettes;
