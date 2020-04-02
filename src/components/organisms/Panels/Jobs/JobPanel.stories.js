import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import { Panel } from '@molecules';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobPanel from './JobPanel.react';

const Decorator = styled.div`
  ${mixins.flexStart}
  ${tw`h-screen items-center p-2`}
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
  title: `${SB_LABELS.ORGANISMS}Panels/Job Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
        <JobSelectHelper />
      </Decorator>
    ),
  ],
};

export const Content = JobPanel;

export const InPanel = () => (
  <Panel>
    <JobPanel />
  </Panel>
);
