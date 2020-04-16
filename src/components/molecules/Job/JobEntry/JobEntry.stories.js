import { SB_LABELS } from '@constants';
import pipelineTypes from '@hkube/consts/lib/pipeline-types';
import { useSocket } from '@hooks';
import { createSelector } from '@reduxjs/toolkit';
import { mapToJobEntry } from '@utils';
import React from 'react';
import { useSelector } from 'react-redux';
import JobEntry from './JobEntry.react';
import JobTime from './JobTime.react';

export default {
  title: `${SB_LABELS.MOLECULES}Jobs/Job Entry`,
};

const jobExample = {
  jobId: `jobId`,
  status: `status`,
  pipelineName: `pipelineName`,
  types: [`type1`, `type2`],
};

const N = 100;

export const Default = () => (
  <>
    <JobEntry {...jobExample} />
    <JobEntry
      {...jobExample}
      jobId={`VeryLongId-`.repeat(N)}
      pipelineName={`Pipeline`.repeat(N)}
      types={Object.values(pipelineTypes)}
      status={`Completed`}
    />
  </>
);

const listSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(mapToJobEntry) ?? [],
);

export const SocketList = () => {
  const list = useSelector(listSelector);

  const { isConnected } = useSocket();
  return isConnected
    ? list.map(job => <JobEntry key={job.jobId} {...job} />)
    : `Connecting Socket...`;
};

export const JobTiming = () => <JobTime startTime={1584972599656} timeTook={19.132} />;
