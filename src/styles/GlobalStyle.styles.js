import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    font-family: 'Unica One', 'cursive';
  }

  main {
    ${tw`w-screen h-screen`};
  }
`;

export default GlobalStyle;
