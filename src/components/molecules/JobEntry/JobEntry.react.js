import { Card, Tag } from '@components';
import { COLORS, mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobTime from './JobTime.react';

const Entry = styled(Card)`
  ${mixins.flexBetween}
`;

const Item = styled.div`
  ${tw`truncate`}
`;

const TagSized = styled(Tag)`
  ${tw`w-24`}
`;

const Container = styled.div`
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

const JobEntry = ({ className, jobId, pipelineName, status, startTime, timeTook, types }) => (
  <Container className={className}>
    <Types>
      {types.map(type => (
        <Tag key={type} color={COLORS.pipeline.type[type]}>
          {type}
        </Tag>
      ))}
    </Types>
    <Entry>
      <Item>{jobId}</Item>
      <Item>{pipelineName}</Item>
      <Item>
        <TagSized color={COLORS.pipeline.status[status]}>{status}</TagSized>
      </Item>
      <Item>
        <JobTime startTime={startTime} timeTook={timeTook} />
      </Item>
    </Entry>
  </Container>
);

JobEntry.propTypes = {
  className: PropTypes.string,
  jobId: PropTypes.string.isRequired,
  pipelineName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startTime: PropTypes.number.isRequired,
  timeTook: PropTypes.number,
  types: PropTypes.array.isRequired,
};

const MemoEntry = memo(JobEntry);
MemoEntry.displayName = `JobEntry`;

export default MemoEntry;
