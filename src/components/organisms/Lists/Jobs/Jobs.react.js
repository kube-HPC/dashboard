import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';

const Container = styled.div`
  ${tw``}
`;

const Jobs = ({ className }) => {
  const { list, select, selected } = useJobs();

  return (
    <Container className={className}>
      {list.map(job => (
        <JobItem key={job.key} isSelected={selected === job.jobId} onSelect={select} job={job} />
      ))}
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = Container;

export default Jobs;
