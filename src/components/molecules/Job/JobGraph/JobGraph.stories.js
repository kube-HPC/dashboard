import { GRAPH, SB_LABELS } from '@constants';
import { useGraph } from '@hooks';
import { mixins } from '@styles';
import { JobSelectHelper } from '@utils';
import React, { useMemo, useReducer } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobGraph from './JobGraph.react';

const Flex = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col h-screen overflow-hidden`}
  ${JobGraph.SC} {
    ${tw`flex-grow`}
  }
`;

const Button = styled.button`
  ${tw`border-black border`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Jobs/Job Graph`,
};

export const EmptyGraph = () => <JobGraph />;

const { LR, UD } = GRAPH.direction;

export const GraphFromSocket = () => {
  const { selected: graph } = useGraph();
  const [direction, toggle] = useReducer(p => !p, true);
  const options = useMemo(() => ({ direction: direction ? LR : UD }), [direction]);

  return (
    <Flex>
      <>
        <JobSelectHelper />
        <Button onClick={toggle}>Toggle Direction</Button>
      </>
      {graph ? <JobGraph jobGraph={graph} options={options} /> : <div>No Graph</div>}
    </Flex>
  );
};
