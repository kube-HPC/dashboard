import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import gradients from './gradients.styles';
import mixins from './mixins.styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    ${gradients.background}
  }

  main {
    ${tw`w-screen h-screen`};
  }

  svg {
    ${mixins.textSecondary}
    ${tw`fill-current w-8`}
    ${mixins.colorOnFocus}
    ${mixins.timingNormal}
  }
`;

export default GlobalStyle;
