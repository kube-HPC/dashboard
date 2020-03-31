import { Divider, Tag } from '@atoms';
import { COLORS, mixins } from '@styles';
import { NOOP } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';
import JobTime from './JobTime.react';

const boxShadow = tw`shadow-outline`.boxShadow;

const outline = css`
  ${tw`shadow-outline`}
`;

const outlineReset = css`
  ${tw`shadow-none`}
`;

const HoverDiv = styled(motion.div)`
  ${mixins.rounded}
  ${tw`w-full`}
`;

const Entry = styled(motion.div)`
  ${mixins.card}
  ${mixins.flexBetween}
  ${mixins.timingSlow}
  ${ifProp(`isSelected`, outline, outlineReset)}
  ${tw`transition-shadow pl-1`}
`;

const RevealBox = styled(motion.div)`
  ${mixins.flexCenter}
  ${tw`w-6 h-8 mx-2`}
  ${Divider.SC} {
    ${mixins.timingSlow}
    ${mixins.rounded}
    ${tw`transition-colors w-1 h-6 min-h-0 top-0`}
    ${ifProp(`isRevealed`, tw`bg-gray-700`)}
  }
`;

const Item = styled.div`
  ${tw`truncate inline-block`};
  span {
    ${tw`truncate`};
  }
`;

const TagSized = styled(Tag)`
  ${tw`w-32`}
`;

const Container = styled(motion.div)`
  ${tw`relative pt-5`}
  ${Tag.SC} {
    ${tw`capitalize`}
  }

  ${Item} {
    :first-child {
      ${mixins.flexStart}
      ${tw`w-1/5 items-center text-left max-w-xs`}
    }

    :nth-child(2) {
      ${tw`w-1/6 text-left max-w-xs`}
    }

    :last-child {
      ${tw`w-1/3 text-center text-left`}
    }
  }
`;

const Types = styled.div`
  ${tw`absolute right-0 top-0 mr-5`}
  ${Tag.SC}:not(:first-child) {
    ${tw`ml-2`}
  }
`;

const JobEntry = ({
  className,
  isRevealed,
  isSelected,
  jobId,
  onHoverStart,
  onSelect = NOOP,
  pipelineName,
  startTime,
  status,
  timeTook,
  types,
}) => {
  const onClick = useCallback(() => onSelect(jobId), [onSelect, jobId]);
  return (
    <Container className={className}>
      <Types>
        {types.map(type => (
          <Tag key={type} color={COLORS.pipeline.type[type]}>
            {type}
          </Tag>
        ))}
      </Types>
      <HoverDiv whileHover={{ boxShadow }}>
        <Entry isSelected={isSelected} onClick={onClick}>
          <Item>
            <RevealBox onHoverStart={onHoverStart} isRevealed={isRevealed}>
              <Divider vertical />
            </RevealBox>
            <span>{jobId}</span>
          </Item>
          <Item>
            <span>{pipelineName}</span>
          </Item>
          <Item>
            <TagSized color={COLORS.pipeline.status[status]}>{status}</TagSized>
          </Item>
          <Item>
            <JobTime startTime={startTime} timeTook={timeTook} />
          </Item>
        </Entry>
      </HoverDiv>
    </Container>
  );
};

JobEntry.propTypes = {
  className: PropTypes.string,
  isRevealed: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  jobId: PropTypes.string.isRequired,
  onHoverStart: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  pipelineName: PropTypes.string.isRequired,
  startTime: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  timeTook: PropTypes.number,
  types: PropTypes.array.isRequired,
};

const MemoEntry = memo(JobEntry);
MemoEntry.SC = Container;
MemoEntry.displayName = `JobEntry`;

export default MemoEntry;
