import { THEME } from '@constants';
import Icon from 'components/atoms/Icons/Icon.react';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';
import { tw } from 'twin.macro';
import { onMode } from '../utils/styles';
import mixins from './mixins.styles';

const GlobalStyle = createGlobalStyle`
  body {
    ${theme(THEME.value.backgroundGradient)}
    ${onMode(tw`text-black`, tw`text-white`)}
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  main {
    ${tw`w-screen h-screen`};
  }

  h1 {
    ${theme(THEME.value.textSecondary)}
    ${tw`font-light text-lg md:text-xl`}
  }

  h2 {
    ${tw`text-base md:text-lg`}
    ${onMode(tw`text-gray-600`, tw`text-gray-300`)}
  }

  span {
    ${tw`font-light`}
  }

  ${Icon.SC} {
    ${mixins.textSecondary}
    ${mixins.colorOnFocus}
    ${tw`fill-current w-5 md:w-6 lg:w-8`}
  }
`;

export default GlobalStyle;
