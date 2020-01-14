import rawStyled from 'styled-components';
import shortcuts from 'styled-shortcuts';

const styled = shortcuts(rawStyled);

export { default as GlobalStyle } from './GlobalStyle.styles';
export { default as mixins } from './mixins.styles';
export { default as theme } from './theme';
export { styled };
