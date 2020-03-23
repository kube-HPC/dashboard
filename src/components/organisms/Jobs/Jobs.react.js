import { JobEntry } from '@components';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const Jobs = ({ className }) => {
  const { jobs } = useJobs();

  return (
    <Container className={className}>
      {jobs.map(({ key, ...job }) => (
        <JobEntry key={key} job={job} />
      ))}
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

export default Jobs;
