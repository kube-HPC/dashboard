import { useActions, useScroll } from '@hooks';
import { spring } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';

const Container = styled.div`
  ${tw``}
`;

const EmptyItem = styled.div`
  height: 90px;
`;

const item = {
  visible: delay => ({
    opacity: 1,
    transition: {
      delay: delay,
      ...spring.slow,
    },
  }),
  hidden: {
    opacity: 0,
  },
};

const JobReveal = ({ className, job, index }) => {
  const {
    indexes: [left, right],
  } = useScroll();

  const {
    jobs: { select },
  } = useActions();

  const selected = useSelector(state => state.jobs.selected);
  const { jobId } = job;
  const isSelected = selected === jobId;
  const isItemInRange = left <= index && index <= right;

  return isItemInRange ? (
    <motion.div
      className={className}
      key={jobId}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={item}>
      <JobItem isSelected={isSelected} onSelect={select} job={job} />
    </motion.div>
  ) : (
    <EmptyItem />
  );
};

JobReveal.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

JobReveal.SC = Container;
JobReveal.displayName = `Jobs`;

export default JobReveal;
