import { THEME } from '@constants';
import Icon from 'components/atoms/Icons/Icon.react';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';
import tw from 'twin.macro';
import { onMode } from '../utils/styles';
import mixins from './mixins.styles';

/* eslint-disable indent */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    ${theme(THEME.value.backgroundGradient)}
    ${onMode(tw`text-black`, tw`text-white`)}
  }

  main {
    ${tw`w-screen h-screen`};
  }

  h1 {
    ${tw`text-lg md:text-xl`}
  }
  h2 {
    ${tw`text-base md:text-lg`}
  }

  ${Icon.SC} {
    ${mixins.textSecondary}
    ${tw`fill-current w-5 md:w-6 lg:w-8`}
    ${mixins.colorOnFocus}
  }
`;

export default GlobalStyle;
