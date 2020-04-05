import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import mixins from './mixins.styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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
