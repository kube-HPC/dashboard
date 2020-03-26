import { JobEntry } from '@components';
import { iconNames } from '@icons';
import { mixins, spring } from '@styles';
import { NOOP } from '@utils';
import IconsBar from 'components/molecules/IconsBar/IconsBar.react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const IconsReveal = styled(motion.div)``;
const JobReveal = styled(motion.div)``;

const Item = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-row cursor-pointer mb-2 justify-start items-center`}
  ${JobReveal} {
    ${tw`flex-grow`}
  }
  ${IconsReveal} {
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

const { redo, play, pause, stop } = iconNames;

const icons = [redo, play, pause, stop];

const JobItem = ({ job: { jobId, ...job }, onSelect = NOOP, isSelected = false }) => {
  const [isRevealed, setRevealed] = useState(false);

  const onHoverStart = useCallback(() => setRevealed(true), []);
  const onHoverEnd = useCallback(() => setRevealed(false), []);

  return (
    <Item key={jobId} onHoverEnd={onHoverEnd}>
      <IconsReveal
        initial="hidden"
        variants={reveal}
        animate={isRevealed ? [`visible`, `reveal`] : `hidden`}>
        <IconsBar icons={icons} />
      </IconsReveal>
      <JobReveal initial="visible" variants={reveal} animate={isRevealed ? `moveRight` : `visible`}>
        <JobEntry
          {...job}
          jobId={jobId}
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

const JobMemo = React.memo(JobItem);
JobMemo.displayName = JobItem.name;

export default JobMemo;
