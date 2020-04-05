import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import { JobSelectHelper } from '@storybookHelpers';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';
import Jobs from './Jobs.react';

const Container = styled.div`
  ${tw`h-screen`}
`;

const Button = styled.button`
  ${tw`border border-black px-2`}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Lists/Jobs`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Default = Jobs;

export const Job_Item = () => {
  const { selected } = useJobs();
  const [isMounted, toggle] = useReducer(p => !p, true);
  return (
    <>
      <JobSelectHelper />
      <Button onClick={() => toggle()}>Toggle Mounted</Button>
      {isMounted && selected && <JobItem jobId={selected} />}
    </>
  );
};
