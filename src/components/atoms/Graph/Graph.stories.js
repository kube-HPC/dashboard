import { GRAPH, RAW, SB_LABELS } from '@constants';
import React from 'react';
import { styled, tw } from 'twin.macro';
import Graph from './Graph.react';

const Container = styled.div`
  ${tw`h-screen w-screen`}
`;

export default {
  title: `${SB_LABELS.ATOMS}Graph`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Default = () => <Graph graph={RAW.graph} />;
export const upDown = () => <Graph graph={RAW.graph} options={{ direction: GRAPH.direction.UD }} />;
