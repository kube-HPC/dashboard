import { VirtualList } from '@components';
import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';
import Jobs from './Jobs.react';

const Container = styled.div`
  ${tw`h-screen`}
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

export const Item = () => {
  const { list, select, selected } = useJobs();
  const job = list[0];
  return <JobItem job={job} isSelected={selected === job.jobId} onSelect={select} />;
};

const Row = ({ index, style, data }) => (
  <div style={style}>
    <JobItem job={data[index]} />
  </div>
);

export const Windowing = () => {
  const { list, select, selected } = useJobs();

  return (
    <VirtualList list={list} itemSize={90}>
      {Row}
    </VirtualList>
  );
};
