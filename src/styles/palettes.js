import { THEME } from '@constants';
import tw from 'twin.macro';
import { COLORS } from './colors';

const { palette, gradients, value } = THEME;

const palettes = {
  [palette.default]: {
    mode: `light`,
    backgroundGradient: gradients.cloudyKnoxville,
    background: tw`bg-white`,
    textSecondary: tw`text-darkGray-500`,
    colors: COLORS,
  },
  [palette.carbon]: {
    mode: `dark`,
    [value.backgroundGradient]: gradients.slickCarbon,
    [value.background]: tw`bg-darkGray-500`,
    [value.textSecondary]: tw`text-darkGray-100`,
    colors: COLORS,
  },
};

export default palettes;
