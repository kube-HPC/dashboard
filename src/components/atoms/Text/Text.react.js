import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Container = styled.span`
  ${ifProp(`bold`, tw`font-bold`)}
`;

const Text = ({ className, children, bold = false }) => (
  <Container className={className} bold={bold}>
    {children}
  </Container>
);

Text.SC = Container;

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
};

export default Text;
