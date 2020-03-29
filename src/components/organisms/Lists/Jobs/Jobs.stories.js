import { RAW, SB_LABELS } from '@constants';
import { NOOP } from '@utils';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';
import JobReveal from './JobReveal.react';
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

export const jobItem = () => (
  <>
    <JobItem job={RAW.job} isSelected={false} onSelect={NOOP} />
    <JobItem job={RAW.job} isSelected onSelect={NOOP} />
  </>
);

export const jobReveals = () => (
  <>
    <JobReveal job={RAW.job} />
  </>
);
