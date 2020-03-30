import { SB_LABELS } from '@constants';
import { useGraph, useJobs } from '@hooks';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobGraph from './JobGraph.react';

const Flex = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col h-full`}
  ${JobGraph.SC} {
    ${tw`flex-grow`}
  }
`;

export default {
  title: `${SB_LABELS.MOLECULES}Job Graph`,
};

export const Default = JobGraph;

export const GraphFromSocket = () => {
  const { graph } = useGraph();
  const { list, select, selected } = useJobs();

  const onChange = useCallback(({ target: { value } }) => select(value), [select]);

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
      </div>
      {graph ? <JobGraph jobGraph={graph}>Example</JobGraph> : `No Graph`}
    </Flex>
  );
};
