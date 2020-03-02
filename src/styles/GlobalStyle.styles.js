import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`overflow-hidden`};
    font-family: 'Unica One', 'cursive';
  }

  main {
    ${tw`w-screen h-screen bg-gray-200`};
  }
`;

export default GlobalStyle;
