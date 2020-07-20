// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import tw from 'twin.macro';
const defaultColor = tw`text-gray-500`.color;

type TagProp = {
  className?: string,
  children: React.Node,
  color?: string,
};

const Tag = ({ className, children, color = defaultColor }: TagProp) => (
  <Container {...{ className, color }}>{children}</Container>
);

const Container = styled.blockquote`
  ${tw`rounded-sm inline-block`}
  ${tw`py-px xl:py-1 px-1`}
  ${tw`text-white text-sm xl:text-sm`}
  background-color: ${prop(`color`, defaultColor)};
`;

Tag.className = Container;

Tag.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  bordered: PropTypes.bool,
};

export default Tag;
