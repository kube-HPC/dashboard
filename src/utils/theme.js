import { THEME } from '@constants';

export const isLightThemeSelector = state => state.theme.mode === THEME.mode.light;
