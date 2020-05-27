import { Divider } from '@atoms';
import { JOBS } from '@config';
import { THEME } from '@constants';
import { useJob } from '@hooks';
import { JobDetails, JobEntry } from '@molecules';
import { mixins } from '@styles';
import { onMode } from '@utils';
import { motion } from 'framer-motion';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ifProp, theme } from 'styled-tools';
import tw, { styled } from 'twin.macro';
import JobActions from './JobActions.react';
import JobTypes from './JobTypes.react';

const revealVariants = [`visible`, `reveal`];
const ANIMATION_WAIT_MS = 100;

const waitForAnimation = (set, value) => () => {
  const id = setTimeout(() => {
    set(value);
  }, ANIMATION_WAIT_MS);

  return id;
};

const shadowSelector = state =>
  state.theme.mode === THEME.mode.light ? tw`shadow-md` : tw`shadow-mdLight`;

const JobItem = ({ className, jobId }) => {
  const whileHover = useSelector(shadowSelector, isEqual);

  const [isRevealed, setRevealed] = useState(false);

  const onHoverStart = waitForAnimation(setRevealed, true);
  const onHoverEnd = waitForAnimation(setRevealed, false);

  const { isSelected, isShowDetails, job, jobDetails, onSelect, types } = useJob(jobId);

  useEffect(() => {
    setRevealed(isShowDetails);
  }, [isShowDetails]);

  return (
    <motion.div
      className={className}
      key={jobId}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={JOBS.ANIMATION.item}>
      <Item key={jobId} onHoverEnd={onHoverEnd}>
        <JobActions
          jobId={jobId}
          animate={isRevealed ? revealVariants : `hidden`}
          variants={JOBS.ANIMATION.reveal}
          isShowDetails={isShowDetails}
        />
        <Reveal
          initial="visible"
          variants={JOBS.ANIMATION.reveal}
          animate={isRevealed ? `moveRight` : `visible`}>
          <JobTypes types={types} />
          <HoverDiv whileHover={whileHover}>
            <Entry isSelected={isSelected}>
              <RevealBox
                onHoverStart={onHoverStart}
                isRevealed={isRevealed}
                isFullHeight={isShowDetails}>
                <Divider vertical />
              </RevealBox>
              <Content onClick={onSelect}>
                <JobEntry {...job} />
                <DetailsReveal
                  key={`${jobId}-details`}
                  initial="hidden"
                  animate={isShowDetails ? `visible` : `hidden`}
                  exit="hidden"
                  variants={JOBS.ANIMATION.showDetails}>
                  {isShowDetails && <JobDetails {...jobDetails} />}
                </DetailsReveal>
              </Content>
            </Entry>
          </HoverDiv>
        </Reveal>
      </Item>
    </motion.div>
  );
};

const DetailsReveal = styled(motion.div)`
  ${tw`w-full overflow-hidden`}
`;

const Reveal = styled(motion.div)`
  ${tw`relative`}
`;

const Entry = styled.div`
  ${theme(THEME.value.background, tw`bg-white`)}
  ${mixins.flexStart}
  ${mixins.rounded}
  ${tw`mt-4 items-center`}
  ${tw`transition-shadow ease-in-out duration-300`}
  ${ifProp(`isSelected`, onMode(tw`shadow-xl`, tw`shadow-xlLight`))}
`;

const Content = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexStart}
  ${tw`flex-col p-2 overflow-auto`}
  ${JobDetails.className} {
    ${tw`w-full pb-2`}
  }
`;

const Item = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-row cursor-pointer mb-2 justify-start items-center`}
  ${Reveal} {
    ${tw`flex-grow w-full`}
  }
  ${JobActions.className} {
    ${tw`pt-4`}
  }
`;

const HoverDiv = styled(motion.div)`
  ${mixins.rounded}
  ${tw`w-full`}
`;

const RevealBox = styled(motion.div)`
  ${mixins.flexCenter}
  ${tw`w-6 h-8 ml-1`}
  ${Divider.className} {
    ${mixins.timingNormal}
    ${tw`transition-colors w-1 min-h-0 top-0 rounded-lg`}
    ${ifProp(`isRevealed`, tw`bg-gray-700`)}
    ${ifProp(`isFullHeight`, tw`h-12`, tw`h-6`)}
  }
`;

JobItem.className = Item;
JobItem.propTypes = {
  className: PropTypes.string,
  jobId: PropTypes.string.isRequired,
};

const JobMemo = React.memo(JobItem);
JobMemo.displayName = JobItem.name;

export default JobMemo;
