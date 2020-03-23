import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import React from 'react';
import JobEntry from './JobEntry.react';
import JobTime from './JobTime.react';

export default {
  title: `${SB_LABELS.MOLECULES}Jobs/Job Entry`,
};

export const Default = () => {
  const { list } = useJobs();
  const job = list[0];
  return <JobEntry key={job.jobId} {...job} />;
};

export const List = () => {
  const { list } = useJobs();
  return list.map(job => <JobEntry key={job.jobId} {...job} />);
};

export const JobTiming = () => <JobTime startTime={1584972599656} timeTook={19.132} />;
