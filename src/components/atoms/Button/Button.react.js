import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Button = ({ className, children, ...props }) => (
  <Container {...{ className, ...props }}>{children}</Container>
);

const Container = styled.button`
  ${tw`transition-opacity duration-200 ease-in-out hocus:opacity-50`}
  ${tw`border p-2 rounded-md`}
`;

Button.className = Container;
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
