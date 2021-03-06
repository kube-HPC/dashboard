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
import { ifProp } from 'styled-tools';
import tw, { styled } from 'twin.macro';
import JobActions from './JobActions.react';
import JobTypes from './JobTypes.react';
import RevealBox from './RevealBox.react';

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
  const [isRevealed, setRevealed] = useState(false);

  const whileHover = useSelector(shadowSelector, isEqual);
  const onHoverStart = waitForAnimation(setRevealed, true);
  const onHoverEnd = waitForAnimation(setRevealed, false);

  const { isSelected, isShowDetails, job, jobDetails, onSelect, types, toggleTagsView } = useJob(
    jobId,
  );

  useEffect(() => {
    if (isShowDetails === false) {
      setRevealed(isShowDetails);
    }
  }, [isShowDetails]);

  return (
    <motion.div
      className={className}
      key={jobId}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={JOBS.ANIMATION.item}>
      <Item key={jobId} {...{ onHoverEnd }}>
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
          <JobTypes {...{ types }} onClick={toggleTagsView} />
          <HoverDiv {...{ whileHover }}>
            <Entry isSelected={isSelected}>
              <RevealBox
                status={job?.status}
                {...{ onHoverStart, isRevealed }}
                isFullHeight={isShowDetails}
              />
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
  ${mixins.flexStart}
  ${tw`mt-4 items-center border-t`}
  ${onMode(tw`border-darkGray-200`, tw`border-darkGray-500`)}
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
  ${tw`w-full rounded-sm`}
`;

JobItem.className = Item;
JobItem.propTypes = {
  className: PropTypes.string,
  jobId: PropTypes.string.isRequired,
};

const JobMemo = React.memo(JobItem);
JobMemo.displayName = JobItem.name;

export default JobMemo;
