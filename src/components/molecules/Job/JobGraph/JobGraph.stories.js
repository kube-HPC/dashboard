import { GRAPH, SB_LABELS } from '@constants';
import { useGraph, useJobs } from '@hooks';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import React, { useCallback, useMemo, useReducer } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobGraph from './JobGraph.react';

const Flex = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col h-screen`}
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

export const Default = JobGraph;

const { LR, UD } = GRAPH.direction;

export const GraphFromSocket = () => {
  const { selected: graph } = useGraph();
  const { list, select, selected } = useJobs();

  const onChange = useCallback(({ target: { value } }) => select(value), [select]);

  const [direction, toggle] = useReducer(p => !p, true);

  const options = useMemo(() => ({ direction: direction ? LR : UD }), [direction]);

  return (
    <Flex>
      <div>
        <select onChange={onChange} onBlur={NOOP}>
          {list.map(({ jobId }) => (
            <option key={jobId} value={jobId}>
              {jobId}
            </option>
          ))}
        </select>
        <div>Selected: {selected || `None`}</div>
        <Button onClick={toggle}>Toggle Direction</Button>
      </div>
      {graph ? <JobGraph jobGraph={graph} options={options} /> : <div>No Graph</div>}
    </Flex>
  );
};
