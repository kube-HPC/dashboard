import {mixins} from '@styles';
import type {Node} from 'react';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import {styled} from 'twin.macro';
import Thumb from './Thumb.react';

type ScrollbarProps = {
  className?: string,
  children: Node,
};

const Scrollbar = ({className, children, ...props}: ScrollbarProps) => (
  <Container {...{className}}>
    <Scrollbars renderThumbVertical={Thumb} {...props}>
      {children}
    </Scrollbars>
  </Container>
);

const Container = styled.div`
  ${mixins.fillContainer}
`;

Scrollbar.className = Container;
Scrollbar.Thumb = Thumb;

export default Scrollbar;
