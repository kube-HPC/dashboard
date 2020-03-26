import { useJobs } from '@hooks';
import { spring } from '@styles';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';

const Container = styled.div`
  ${tw``}
`;

const item = {
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      ...spring.slow,
    },
  }),
  hidden: {
    opacity: 0,
    y: -20,
    transition: spring.slow,
  },
};

const Jobs = ({ className }) => {
  const { list, select, selected } = useJobs();
  const currIndex = useRef(0);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 500);
  }, []);

  return (
    <Container className={className}>
      <AnimatePresence>
        {reveal &&
          list.map(job => {
            const { jobId } = job;
            const isSelected = selected === jobId;
            currIndex.current += 0.3;
            return (
              <motion.div
                key={job.jobId}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={currIndex.current}
                variants={item}>
                <JobItem isSelected={isSelected} onSelect={select} job={job} />
              </motion.div>
            );
          })}
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
