import { Tag } from '@atoms';
import { useUserTheme } from '@hooks';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import tw, { styled } from 'twin.macro';
import JobTime from './JobTime.react';

const JobEntry = ({ className, jobId, pipelineName, startTime, status, timeTook }) => {
  const {
    theme: { colors },
  } = useUserTheme();
  return (
    <Container className={className}>
      <JobId>{jobId}</JobId>
      <PipelineName>{pipelineName}</PipelineName>
      <TagContainer>
        <Tag color={colors.pipeline.status[status]}>{status}</Tag>
      </TagContainer>
      <JobTime startTime={startTime} timeTook={timeTook} />
    </Container>
  );
};

const TagContainer = styled.div`
  ${Tag.className} {
    ${tw`w-auto lg:w-24 xl:w-32 capitalize`}
  }
`;

const JobId = styled.span``;
const PipelineName = styled.span``;

const Container = styled.div`
  ${tw`grid grid-cols-4 grid-flow-row gap-2`}
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
