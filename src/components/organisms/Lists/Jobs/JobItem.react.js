import { useJob } from '@hooks';
import { JobDetails, JobEntry } from '@molecules';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobActions from './JobActions.react';

const JobReveal = styled(motion.div)``;
const Container = styled(motion.div)``;

const Item = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-row cursor-pointer mb-2 justify-start items-center`}
  ${JobReveal} {
    ${tw`flex-grow`}
  }
  ${JobActions.SC} {
    ${tw`pt-4`}
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

const item = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const revealVariants = [`visible`, `reveal`];

const JobItem = ({ className, jobId }) => {
  const [isRevealed, setRevealed] = useState(false);

  const { job, doShowDetails, isSelected, onSelect, jobDetails } = useJob(jobId);

  const onHoverStart = useCallback(() => setRevealed(true), []);
  const onHoverEnd = useCallback(() => setRevealed(false), []);

  return (
    <Container
      className={className}
      key={jobId}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={item}>
      <Item key={jobId} onHoverEnd={onHoverEnd}>
        {!doShowDetails && (
          <JobActions
            jobId={jobId}
            animate={isRevealed ? revealVariants : `hidden`}
            variants={reveal}
          />
        )}
        <JobReveal
          initial="visible"
          variants={reveal}
          animate={!doShowDetails ? (isRevealed ? `moveRight` : `visible`) : null}>
          <JobEntry
            {...job}
            onSelect={onSelect}
            isSelected={isSelected}
            onHoverStart={onHoverStart}
            isRevealed={isRevealed}
          />
          {doShowDetails && <JobDetails {...jobDetails} />}
        </JobReveal>
      </Item>
    </Container>
  );
};

JobItem.propTypes = {
  className: PropTypes.string,
  jobId: PropTypes.string.isRequired,
};

JobItem.SC = Item;

const JobMemo = React.memo(JobItem);
JobMemo.displayName = JobItem.name;

export default JobMemo;
