import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import Icon from '../components/atoms/Icons/Icon.react';
import gradients from './gradients.styles';
import mixins from './mixins.styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    ${gradients.cloudyKnoxville}
  }

  main {
    ${tw`w-screen h-screen`};
  }

  h1 {
    ${tw`text-lg md:text-xl`}
  }

  ${Icon.SC} {
    ${mixins.textSecondary}
    ${tw`fill-current w-5 md:w-6 lg:w-8`}
    ${mixins.colorOnFocus}
    ${mixins.timingNormal}
  }
`;

export default GlobalStyle;
