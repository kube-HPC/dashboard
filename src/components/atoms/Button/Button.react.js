/* @flow */
import {mixins} from '@styles';
import * as React from 'react';
import tw, {styled} from 'twin.macro';

type $Props = {
  className?: string,
  children: React.Node,
};

const Button = ({className, children, ...props}: $Props) => (
  <Container {...{...props, className}}>{children}</Container>
);

const Container = styled.button`
  ${mixins.opacityFocus}
  ${tw`border py-1 px-2 rounded-md`}
`;

Button.className = Container;
export default Button;
