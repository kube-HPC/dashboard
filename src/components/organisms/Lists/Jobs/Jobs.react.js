import { useJobs } from '@hooks';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobReveal from './JobReveal.react';

const Container = styled.div`
  ${tw`h-full`}
`;

const Jobs = ({ className }) => {
  const { list } = useJobs();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 500);
  }, []);

  return (
    <Container className={className}>
      <AnimatePresence>
        {reveal && list.map((job, index) => <JobReveal key={index} index={index} job={job} />)}
      </AnimatePresence>
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = Container;
Jobs.displayName = `Jobs`;

export default Jobs;
