import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.div.attrs(({ x, y }) => ({
  style: {
    left: `${x}px`,
    top: `${y}px`,
  },
}))`
  ${tw`absolute z-40 pointer-events-none p-2 rounded shadow-lg bg-white`}
`;

const Tooltip = ({ children, x = 0, y = 0 }) => (
  <Container x={x} y={y}>
    {children}
  </Container>
);

Tooltip.className = Container;

Tooltip.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
