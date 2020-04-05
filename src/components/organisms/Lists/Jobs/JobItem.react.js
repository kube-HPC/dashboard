import { JobEntry } from '@molecules';
import { mixins, spring } from '@styles';
import { NOOP } from '@utils';
import { motion } from 'framer-motion';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobActions from './JobActions.react';

const JobReveal = styled(motion.div)``;

const Item = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-row cursor-pointer mb-2 justify-start items-center`}
  ${JobReveal} {
    ${tw`flex-grow`}
  }
  ${JobActions.SC} {
    ${tw`pt-6`}
  }
`;

const reveal = {
  visible: {
    x: 0,
  },
  reveal: {
    opacity: 1,
    display: `block`,
    transition: spring.slow,
  },
  hidden: {
    x: -100,
    opacity: 0,
    display: `none`,
    transition: spring.slow,
  },
  moveRight: {
    x: 10,
    transition: spring.gentle,
  },
};

const revealVariants = [`visible`, `reveal`];

const JobItem = ({ job, onSelect = NOOP, isSelected = false }) => {
  const [isRevealed, setRevealed] = useState(false);

  const onHoverStart = useCallback(() => setRevealed(true), []);
  const onHoverEnd = useCallback(() => setRevealed(false), []);

  return (
    <Item key={job.jobId} onHoverEnd={onHoverEnd}>
      <JobActions
        jobId={job.jobId}
        animate={isRevealed ? revealVariants : `hidden`}
        variants={reveal}
      />
      <JobReveal initial="visible" variants={reveal} animate={isRevealed ? `moveRight` : `visible`}>
        <JobEntry
          {...job}
          onSelect={onSelect}
          isSelected={isSelected}
          onHoverStart={onHoverStart}
          isRevealed={isRevealed}
        />
      </JobReveal>
    </Item>
  );
};

JobItem.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

JobItem.SC = Item;

const JobMemo = React.memo(JobItem, isEqual);
JobMemo.displayName = JobItem.name;

export default JobMemo;
