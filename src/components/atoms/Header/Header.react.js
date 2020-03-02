import { styled } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Main = styled.div`
  ${tw`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl leading-snug`}
  width: fit-content;
  background-color: ${`bg`};
  color: ${`color`};
  ${ifProp(`small`, tw`text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl`)}
`;

const Header = ({ children, bg = 'transparent', color = 'color', small = false }) => (
  <Main bg={bg} color={color} small={small}>
    {children}
  </Main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  small: PropTypes.bool,
};

export default Header;
