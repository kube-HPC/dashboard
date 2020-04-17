import { Divider } from '@atoms';
import { JOBS } from '@config';
import { useJob } from '@hooks';
import { JobDetails, JobEntry } from '@molecules';
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';
import JobActions from './JobActions.react';
import JobTypes from './JobTypes.react';

const Reveal = styled(motion.div)`
  ${tw`relative`}
`;

const Entry = styled.div`
  ${mixins.flexStart}
  ${mixins.rounded}
  ${ifProp(`isSelected`, tw`shadow-xl`, tw`shadow-none`)}
  ${tw`transition-shadow ease-in-out duration-300`}
  ${tw`bg-white mt-4 items-center`}
`;

const DividerWrapper = styled.div`
${mixins.flexCenter}
${tw`w-full mt-1`}
 > ${Divider.SC} {
    ${tw`w-1/2`}
  }
`;

const Content = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexStart}
  ${tw`flex-col p-2`}
  ${JobDetails.SC} {
    ${tw`w-full pb-2`}
  }
`;

const Item = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-row cursor-pointer mb-2 justify-start items-center`}
  ${tw`w-full`}
  ${Reveal} {
    ${tw`flex-grow w-full`}
  }
  ${JobActions.SC} {
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
  ${Divider.SC} {
    ${mixins.timingSlow}
    ${mixins.rounded}
    ${tw`transition-colors w-1 min-h-0 top-0`}
    ${ifProp(`isRevealed`, tw`bg-gray-700`)}
    ${ifProp(`isFullHeight`, tw`h-12`, tw`h-6`)}
  }
`;

const revealVariants = [`visible`, `reveal`];

const JobItem = ({ className, jobId }) => {
  const {
    job,
    types,
    isCompleted,
    isSelected,
    onSelect,
    jobDetails,
    isRevealed,
    onHoverEnd,
    onHoverStart,
    whileHover,
  } = useJob(jobId);

  return (
    <motion.div
      className={className}
      key={jobId}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={JOBS.ANIMATION.item}>
      <Item key={jobId} onHoverEnd={onHoverEnd}>
        {isCompleted && (
          <JobActions
            jobId={jobId}
            animate={isRevealed ? revealVariants : `hidden`}
            variants={JOBS.ANIMATION.reveal}
          />
        )}
        <Reveal
          initial="visible"
          variants={JOBS.ANIMATION.reveal}
          animate={isCompleted && (isRevealed ? `moveRight` : `visible`)}>
          <JobTypes types={types} />
          <HoverDiv whileHover={whileHover} onClick={onSelect}>
            <Entry isSelected={isSelected}>
              <RevealBox
                onHoverStart={onHoverStart}
                isRevealed={isRevealed}
                isFullHeight={!isCompleted}>
                <Divider vertical />
              </RevealBox>
              <Content>
                <JobEntry {...job} />
                {!isCompleted && (
                  <>
                    <DividerWrapper>
                      <Divider />
                    </DividerWrapper>
                    <JobDetails {...jobDetails} />
                  </>
                )}
              </Content>
            </Entry>
          </HoverDiv>
        </Reveal>
      </Item>
    </motion.div>
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
