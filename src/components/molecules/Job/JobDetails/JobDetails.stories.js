import { SB_LABELS } from '@constants';
import { useGraph } from '@hooks';
import { JobSelectHelper } from '@storybookHelpers';
import { selectedStatsSelector } from '@utils';
import React from 'react';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import JobDetails from './JobDetails.react';

const Decorator = styled.div`
  ${tw``}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Jobs/Job Details`,
  decorators: [
    S => (
      <Decorator>
        <JobSelectHelper />
        <S />
      </Decorator>
    ),
  ],
};

export const Default = () => {
  const { graph: jobGraph } = useGraph();
  const { nodesStats, progress } = useSelector(selectedStatsSelector);

  return jobGraph && <JobDetails jobGraph={jobGraph} progress={progress} nodesStats={nodesStats} />;
};
