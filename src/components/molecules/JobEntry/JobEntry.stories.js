import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import React from 'react';
import JobEntry from './JobEntry.react';

export default {
  title: `${SB_LABELS.MOLECULES}Job Entry`,
};

const empty = <div>No Jobs</div>;

export const Default = () => {
  const { jobs } = useJobs();
  return jobs ? <JobEntry job={jobs[0]} /> : empty;
};

export const List = () => {
  const { jobs } = useJobs();
  return jobs ? jobs.slice(0, 10).map(job => <JobEntry key={job.key} job={job} />) : empty;
};
