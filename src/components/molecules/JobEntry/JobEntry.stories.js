import { SB_LABELS } from '@constants';
import { useJobs, useSocket } from '@hooks';
import React from 'react';
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

export const Default = () => <JobEntry {...jobExample} />;

export const SocketList = () => {
  const { list } = useJobs();
  const { isConnected } = useSocket();
  return isConnected
    ? list.map(job => <JobEntry key={job.jobId} {...job} />)
    : `Connecting Socket...`;
};

export const JobTiming = () => <JobTime startTime={1584972599656} timeTook={19.132} />;
