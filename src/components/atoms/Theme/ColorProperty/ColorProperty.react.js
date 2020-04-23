import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexBetween}
`;

const ColorBox = styled.div`
  ${tw`border border-gray-400 bg-white hocus:cursor-pointer`}
  ${tw`transition-colors transition-opacity hocus:opacity-50`}
  > div {
    ${tw`h-3 w-10 m-1 rounded-sm `}
    background-color: ${prop(`color`)};
  }
`;

const ColorProperty = ({ className, children, color }) => (
  <Container className={className}>
    <div>{children}</div>
    <ColorBox color={color}>
      <div />
    </ColorBox>
  </Container>
);

ColorProperty.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

ColorProperty.SC = Container;

export default ColorProperty;
