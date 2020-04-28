import { THEME } from '@constants';
import tw from 'twin.macro';
import { COLORS } from './colors';

const { palette, gradients, value } = THEME;

const palettes = {
  [palette.default]: {
    name: `default`,
    mode: `light`,
    [value.backgroundGradient]: gradients.cloudyKnoxville,
    [value.headerGradient]: gradients.slickCarbon,
    [value.background]: tw`bg-white`,
    [value.textSecondary]: tw`text-darkGray-500`,
    colors: COLORS,
  },
  [palette.carbon]: {
    name: `carbon`,
    mode: `dark`,
    [value.backgroundGradient]: gradients.slickCarbon,
    [value.headerGradient]: gradients.cloudyKnoxville,
    [value.background]: tw`bg-darkGray-500`,
    [value.textSecondary]: tw`text-darkGray-100`,
    colors: COLORS,
  },
};

export default palettes;
