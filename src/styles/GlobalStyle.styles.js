import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';
import mixins from './mixins.styles';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  main {
    ${tw`w-screen h-screen`};
  }

  svg {
    ${mixins.textSecondary}
    ${tw`fill-current w-6`}
    ${mixins.colorOnFocus}
  }
`;

export default GlobalStyle;
