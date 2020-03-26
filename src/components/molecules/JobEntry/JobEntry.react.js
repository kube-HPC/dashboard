import { Divider, Tag } from '@components';
import { COLORS, mixins } from '@styles';
import { NOOP } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';
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
  ${tw`transition-shadow`}
`;

const RevealBox = styled(motion.div)`
  ${tw`w-10`}
  ${Divider.SC} {
    ${mixins.timingSlow}
    ${mixins.rounded}
    ${tw`transition-colors w-1`}
  }
  :hover,
  :focus {
    ${Divider.SC} {
      ${tw`bg-gray-500`}
    }
  }
`;

const Item = styled.div`
  ${tw`truncate`}
`;

const TagSized = styled(Tag)`
  ${tw`w-24`}
`;

const Container = styled(motion.div)`
  ${tw`relative pt-5`}
  ${Tag.SC} {
    ${tw`capitalize`}
  }
  ${Item} {
    :first-child,
    :last-child {
      ${tw`text-left`}
    }

    :first-child {
      ${mixins.flexStart}
      ${tw`w-1/4`}
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
  jobId,
  pipelineName,
  status,
  startTime,
  timeTook,
  types,
  onSelect = NOOP,
  isSelected = false,
}) => {
  const [revealed, setRevealed] = useState(false);

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
            <RevealBox onHoverStart={() => setRevealed(true)} onHoverEnd={() => setRevealed(false)}>
              <Divider vertical />
            </RevealBox>
            {jobId}
          </Item>
          <Item>{pipelineName}</Item>
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
  jobId: PropTypes.string.isRequired,
  pipelineName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startTime: PropTypes.number.isRequired,
  timeTook: PropTypes.number,
  types: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

const MemoEntry = memo(JobEntry);
MemoEntry.SC = Container;
MemoEntry.displayName = `JobEntry`;

export default MemoEntry;
