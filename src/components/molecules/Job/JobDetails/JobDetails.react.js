import { Tag } from '@atoms';
import { useUserTheme } from '@hooks';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import Circle from 'react-circle';
import { prop } from 'styled-tools';
import { styled, tw } from 'twin.macro';
import JobGraph from '../JobGraph/JobGraph.react';

const JobDetails = ({ className, jobGraph, progress, nodesStats, status }) => {
  const { theme } = useUserTheme();
  return (
    <Container className={className}>
      <JobGraph jobGraph={jobGraph} />
      <Details>
        {nodesStats && (
          <Tasks>
            <h1>Tasks Stats</h1>
            {Object.entries(nodesStats).map(([status, count]) => (
              <li key={status}>
                <span>{status}</span>
                <Tag color={theme.colors.task.status[status]}>{count}</Tag>
              </li>
            ))}
          </Tasks>
        )}
        <Actions color={theme.colors.pipeline.status[status]}>
          <Circle animate={true} progress={progress} animationDuration="1s" />
        </Actions>
      </Details>
    </Container>
  );
};

const Details = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full`}
`;

const Tasks = styled.ul`
  ${tw`mr-10`}
  ${Tag.className} {
    ${tw`font-bold ml-10`}
  }
  h1 {
    ${tw`text-lg text-secondary`}
  }
  span {
    ${tw`capitalize`}
  }
  li {
    ${mixins.flexBetween}
    ${tw`my-1`}
  }
`;

const Container = styled.div`
  ${mixins.flexBetween}
  ${JobGraph.className} {
    ${tw`flex-grow`}
  }
`;

const Actions = styled.div`
  ${mixins.flexBetween}
  ${tw`flex-col w-auto`};
  svg {
    text {
      ${tw`fill-current`}
    }
    circle {
      color: ${prop(`color`)};
      ${tw`stroke-current`}
    }
  }
`;

JobDetails.className = Container;

JobDetails.propTypes = {
  className: PropTypes.string,
  jobGraph: PropTypes.object,
  progress: PropTypes.number,
  nodesStats: PropTypes.object,
  status: PropTypes.string,
};

export default JobDetails;
