import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`overflow-hidden`}
  }

  main {
    ${tw`w-screen h-screen`}
  }
`;

export default GlobalStyle;
