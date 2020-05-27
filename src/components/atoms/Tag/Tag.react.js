import PropTypes from 'prop-types';
import React from 'react';
import { prop } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const defaultColor = tw`bg-gray-500`.backgroundColor;

const Container = styled.div`
  ${tw`rounded-sm inline-block`}
  ${tw`py-px xl:py-1 px-2`}
  ${tw`text-white text-sm xl:text-base`}
  background-color: ${prop(`color`, defaultColor)};
`;

const Tag = ({ className, children, color = defaultColor }) => (
  <Container className={className} color={color}>
    {children}
  </Container>
);

Tag.className = Container;

Tag.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  bordered: PropTypes.bool,
};

export default Tag;
