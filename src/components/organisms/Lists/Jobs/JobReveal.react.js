import { useActions } from '@hooks';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import JobItem from './JobItem.react';

const Container = styled(motion.div)`
  transform: translateY(${prop(`offsetY`, 0)}px);
`;

const item = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -40,
  },
};

const JobReveal = ({ className, job }) => {
  const {
    jobs: { select },
  } = useActions();

  const selected = useSelector(state => state.jobs.selected);
  const { jobId } = job;
  const isSelected = selected === jobId;

  return (
    <Container
      className={className}
      key={jobId}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={item}>
      <JobItem isSelected={isSelected} onSelect={select} job={job} />
    </Container>
  );
};

JobReveal.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired,
};

JobReveal.SC = Container;
const MemoJobReveal = React.memo(JobReveal);
MemoJobReveal.displayName = `Jobs`;

export default MemoJobReveal;
