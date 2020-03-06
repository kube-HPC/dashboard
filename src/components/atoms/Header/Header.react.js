import { styled } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Main = styled.div`
  ${tw`leading-snug text-xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl`}
  ${ifProp(`small`, tw`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`)}
  background-color: ${`bg`};
  color: ${`color`};
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
