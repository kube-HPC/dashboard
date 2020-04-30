import { THEME } from '@constants';
import { gradients } from '@styles';
import tw from 'twin.macro';
import { COLORS, COLORS_DARK } from './colors';

const { palette, value } = THEME;

const palettes = {
  [palette.default]: {
    name: `default`,
    mode: `light`,
    [value.backgroundGradient]: gradients.cloudyKnoxville,
    [value.headerGradient]: gradients.slickCarbon,
    [value.background]: tw`bg-white`,
    [value.backgroundDark]: tw`bg-darkGray-500`,
    [value.textSecondary]: tw`text-darkGray-500`,
    colors: COLORS,
  },
  [palette.carbon]: {
    name: `carbon`,
    mode: `dark`,
    [value.backgroundGradient]: gradients.slickCarbon,
    [value.headerGradient]: gradients.cloudyKnoxville,
    [value.background]: tw`bg-darkGray-500`,
    [value.backgroundDark]: tw`bg-darkGray-100`,
    [value.textSecondary]: tw`text-darkGray-100`,
    colors: COLORS_DARK,
  },
};

export default palettes;
