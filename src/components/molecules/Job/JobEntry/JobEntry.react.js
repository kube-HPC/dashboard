import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import tw, { styled } from 'twin.macro';
import JobTime from './JobTime.react';

const JobEntry = ({ className, jobId, pipelineName, startTime, timeTook }) => (
  <Container className={className}>
    <JobId>{jobId}</JobId>
    <PipelineName>{pipelineName}</PipelineName>
    <JobTime startTime={startTime} timeTook={timeTook} />
  </Container>
);

const JobId = styled.span``;
const PipelineName = styled.span``;

const Container = styled.div`
  ${tw`grid grid-cols-3 grid-flow-row gap-2`}
  ${tw`w-full truncate text-center items-center justify-center`}

  > {
    ${JobId} {
      ${tw`text-left`}
    }

    span {
      ${tw`truncate`};
    }

    ${JobId} {
      ${tw`font-light`}
    }

    ${PipelineName} {
      ${tw`font-medium`}
    }

    ${JobTime.SC} {
      ${tw`text-left`}
    }
  }
`;

JobEntry.propTypes = {
  className: PropTypes.string,
  jobId: PropTypes.string.isRequired,
  pipelineName: PropTypes.string.isRequired,
  startTime: PropTypes.number,
  status: PropTypes.string.isRequired,
  timeTook: PropTypes.number,
  types: PropTypes.array,
};

const MemoEntry = memo(JobEntry, isEqual);
MemoEntry.SC = Container;
MemoEntry.displayName = `JobEntry`;

export default MemoEntry;
