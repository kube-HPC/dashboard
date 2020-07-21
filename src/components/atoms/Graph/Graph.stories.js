import { GRAPH, RAW, SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Graph from './Graph.react';

const Container = styled.div`
  ${mixins.fillScreen}
  ${tw`p-4 border-2 border-orange-500`}
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
