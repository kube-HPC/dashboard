import { JobEntry } from '@components';
import { useJobs } from '@hooks';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const Item = styled(motion.div)`
  /* ${tw`transform transition ease-in-out hover:scale-105 cursor-pointer duration-500`}; */
`;

const Jobs = ({ className }) => {
  const { list } = useJobs();

  return (
    <Container className={className}>
      {list.map(job => (
        <Item key={job.jobId} whileHover={{ scale: 1.05 }}>
          <JobEntry {...job} />
        </Item>
      ))}
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = Container;

export default Jobs;
