import { Tag } from '@atoms';
import { COLORS, mixins } from '@styles';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobTime from './JobTime.react';

const TagContainer = styled.div`
  ${mixins.flexCenter}
  ${Tag.SC} {
    ${tw`w-auto lg:w-24 xl:w-32 capitalize`}
  }
`;

const JobId = styled.span``;
const PipelineName = styled.span``;

const Container = styled.div`
  ${mixins.flexBetween}
  ${tw`text-center w-full`}

  span {
    ${tw`truncate`};
  }

  > {
    :not(:last-child) {
      ${tw`mr-1`}
    }
    ${JobId} {
      ${tw`w-1/5 items-center text-left truncate`}
    }

    ${PipelineName} {
      ${tw`w-1/6 text-left max-w-xs`}
    }

    ${TagContainer} {
      ${tw`w-1/6`}
    }

    ${JobTime.SC} {
      ${tw`w-1/6 xl:w-full max-w-xs`}
    }
  }
`;

const JobEntry = ({ className, jobId, pipelineName, startTime, status, timeTook }) => (
  <Container className={className}>
    <JobId>{jobId}</JobId>
    <PipelineName>{pipelineName}</PipelineName>
    <TagContainer>
      <Tag color={COLORS.pipeline.status[status]}>{status}</Tag>
    </TagContainer>
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
  types: PropTypes.array,
};

const MemoEntry = memo(JobEntry, isEqual);
MemoEntry.SC = Container;
MemoEntry.displayName = `JobEntry`;

export default MemoEntry;
