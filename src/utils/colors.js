import { parseToRgb } from 'polished';

export const toRGB = color => Object.values(parseToRgb(color));
