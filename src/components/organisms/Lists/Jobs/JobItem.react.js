import { JobEntry } from '@components';
import { iconNames } from '@icons';
import { mixins, spring } from '@styles';
import IconsBar from 'components/molecules/IconsBar/IconsBar.react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Reveal = styled(motion.div)``;
const JobReveal = styled(motion.div)``;

const Item = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-row cursor-pointer mb-2 justify-start items-center`}
  ${JobReveal} {
    ${tw`flex-grow`}
  }
  ${Reveal} {
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

const JobItem = ({ job, onSelect, isSelected }) => {
  const [revealed, setRevealed] = useState(false);
  const jobId = job.jobId;

  return (
    <Item key={jobId} onHoverStart={() => setRevealed(true)} onHoverEnd={() => setRevealed(false)}>
      <Reveal
        initial="hidden"
        variants={reveal}
        animate={revealed ? [`visible`, `reveal`] : `hidden`}>
        <IconsBar icons={icons} />
      </Reveal>
      <JobReveal initial="visible" variants={reveal} animate={revealed ? `moveRight` : `visible`}>
        <JobEntry {...job} onSelect={onSelect} isSelected={isSelected} />
      </JobReveal>
    </Item>
  );
};

JobItem.propTypes = {
  className: PropTypes.string,
};

JobItem.SC = Item;

export default JobItem;
