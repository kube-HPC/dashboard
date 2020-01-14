import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';
import * as fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Unica One';
    src: url(${fonts.UnicaOneRegularTTF}) format('truetype');
  }
  body {
    ${tw`overflow-hidden`}
    font-family: 'Unica One', cursive;
  }
`;

export default GlobalStyle;
