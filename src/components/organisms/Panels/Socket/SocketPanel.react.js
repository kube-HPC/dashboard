// @flow
import { CONNECTION } from '@config';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type SocketPanelProps = {
  className: string,
};

const SocketPanel = ({ className }: SocketPanelProps) => (
  <Container {...{ className }}>
    <pre>{JSON.stringify(CONNECTION, null, 2)}</pre>
  </Container>
);

const Container = styled.div`
  ${mixins.fillContainer}
  ${tw`text-left`}
`;

SocketPanel.className = Container;

export default SocketPanel;
