import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import tw from 'twin.macro';

const defaultColor = tw`bg-gray-500`.backgroundColor;

const Container = styled.span`
  ${tw`transition-colors transition-opacity duration-500 hocus:opacity-75
    py-1 px-2 rounded-lg text-white inline-block`}
  background-color: ${prop('color', defaultColor)};
`;

const Tag = ({ className, children, color = defaultColor }) => (
  <Container className={className} color={color}>
    {children}
  </Container>
);

Tag.propTypes = {
  className: PropTypes.string,
  color: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Tag;
