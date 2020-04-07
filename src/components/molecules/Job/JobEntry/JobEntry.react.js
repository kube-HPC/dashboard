import { Tag } from '@atoms';
import { COLORS, mixins } from '@styles';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobTime from './JobTime.react';

const TagFixed = styled(Tag)`
  ${tw`w-32 capitalize`}
`;

const Container = styled.div`
  ${mixins.flexBetween}
  ${tw`p-2 text-center w-full`}

  > {
    :first-child {
      ${mixins.flexStart}
      ${tw`w-1/5 items-center text-left max-w-xs`}
    }

    :nth-child(2) {
      ${tw`w-1/6 text-left max-w-xs`}
    }

    :last-child {
      ${tw`w-1/3 text-left`}
    }
    span {
      ${tw`truncate inline-block`};
    }
  }
`;

const JobEntry = ({ className, jobId, pipelineName, startTime, status, timeTook }) => (
  <Container className={className}>
    <span>{jobId}</span>
    <span>{pipelineName}</span>
    <TagFixed color={COLORS.pipeline.status[status]}>{status}</TagFixed>
    <JobTime startTime={startTime} timeTook={timeTook} />
  </Container>
);

JobEntry.propTypes = {
  className: PropTypes.string,
  jobId: PropTypes.string.isRequired,
  pipelineName: PropTypes.string.isRequired,
  startTime: PropTypes.number,
  status: PropTypes.string.isRequired,
  timeTook: PropTypes.number,
  types: PropTypes.array.isRequired,
};

const MemoEntry = memo(JobEntry, isEqual);
MemoEntry.SC = Container;
MemoEntry.displayName = `JobEntry`;

export default MemoEntry;
