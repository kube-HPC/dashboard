import { Tag } from '@atoms';
import { useJobActions } from '@hooks';
import { COLORS, mixins } from '@styles';
import IconsBar from 'components/molecules/IconsBar/IconsBar.react';
import PropTypes from 'prop-types';
import React from 'react';
import Circle from 'react-circle';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobGraph from '../JobGraph/JobGraph.react';

const Details = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full`}
`;

const Tasks = styled.ul`
  ${tw`mr-10`}
  ${Tag.SC} {
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
  ${JobGraph.SC} {
    ${tw`flex-grow`}
  }
`;

const Actions = styled.div`
  ${mixins.flexBetween}
  ${tw`flex-col w-auto`};
  > :last-child {
    ${tw`mt-2`}
  }
`;

const JobDetails = ({ className, jobGraph, progress, nodesStats }) => {
  const { icons } = useJobActions(jobGraph?.jobId);
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
                <Tag color={COLORS.task.status[status]}>{count}</Tag>
              </li>
            ))}
          </Tasks>
        )}
        <Actions>
          <Circle animate={true} lineWidth="40" progress={progress} animationDuration="1s" />
          <IconsBar icons={icons} />
        </Actions>
      </Details>
    </Container>
  );
};

JobDetails.SC = Container;

JobDetails.propTypes = {
  className: PropTypes.string,
  jobGraph: PropTypes.object,
  progress: PropTypes.number,
  nodesStats: PropTypes.object,
};

export default JobDetails;
