import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import { AdminPanel } from '@molecules';
import { NOOP } from '@utils';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobPanel from './JobPanel.react';

const Decorator = styled.div`
  ${tw`h-full`}
`;

const Container = styled.div`
  ${tw`border-black p-2 border-2 m-2`}
`;

const SelectHelper = () => {
  const { select, list, selected } = useJobs();

  const onChange = useCallback(({ target: { value } }) => select(value), [select]);
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
        <SelectHelper />
        <S />
      </Decorator>
    ),
  ],
};

export const Content = JobPanel;

export const InPanel = () => (
  <AdminPanel>
    <JobPanel />
  </AdminPanel>
);
