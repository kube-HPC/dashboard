import { GRAPH, SB_LABELS } from '@constants';
import { useGraph, useJobs } from '@hooks';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
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

const Container = styled.div`
  ${tw`border-black p-2 border-2 m-2`}
`;

const JobSelectHelper = () => {
  const { select, list, selected } = useJobs();

  const onChange = useCallback(({ target: { value } }) => select(value), [select]);

  useEffect(() => {
    if (selected === null && list.length !== 0) {
      select(list[0]?.jobId);
    }
  }, [list, select, selected]);

  return (
    <Container>
      <select onChange={onChange} onBlur={NOOP}>
        {list.map(({ jobId }) => (
          <option key={jobId} value={jobId}>
            {jobId}
          </option>
        ))}
      </select>
      <div>Selected: {selected || `None`}</div>
    </Container>
  );
};

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
