import { Graph, Tag } from '@atoms';
import { PRIORITY } from '@constants';
import { useGraph } from '@hooks';
import { iconNames } from '@icons';
import { IconsBar, JobGraph } from '@molecules';
import { createSelector } from '@reduxjs/toolkit';
import { COLORS, mixins } from '@styles';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Item = styled.div`
  ${mixins.flexBetween}
`;

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexBetween}
  ${tw`flex-col`}
  ${JobGraph.SC} {
    ${tw`flex-grow`}
    ${Graph.SC} {
      ${ifProp(`isExpanded`, tw`h-64`)}
    }
  }
  > * {
    ${tw`w-full`}
  }
  ${Item} {
    ${tw`mt-2`}
  }
  ${Tag.SC} {
    ${tw`mr-1 capitalize`};
    :last-child {
      ${tw`mr-0`};
    }
  }
`;

const Tags = styled.div`
  ${mixins.flexCenter}
`;

const statsSelector = createSelector(
  state => state.jobs,
  ({ dataSource, selected }) => {
    const job = dataSource?.find(({ key }) => key === selected);
    const nodesStats = job?.status.data.states;
    const priority = job?.pipeline.priority;
    // const downloadPath = job?.results?.data?.storageInfo.path;

    return { nodesStats, priority };
  },
);

const { play, stop, pause, redo, fileDownload } = iconNames;
const icons = [redo, play, stop, pause, fileDownload];

const JobPanel = () => {
  const { selected } = useGraph();
  const { nodesStats, priority } = useSelector(statsSelector, isEqual);
  const { expanded } = useSelector(state => state.panel);

  return (
    <Container isExpanded={expanded}>
      {selected && <JobGraph jobGraph={selected} />}
      {nodesStats && (
        <Item>
          <div>Node Stats</div>
          <Tags>
            {Object.entries(nodesStats).map(([status, count]) => (
              <Tag key={status} color={COLORS.task.status[status]}>
                {status}: {count}
              </Tag>
            ))}
          </Tags>
        </Item>
      )}
      <Item>
        <div>Priority</div>
        <Tag color={COLORS.pipeline.priority[priority]}>{PRIORITY[priority]}</Tag>
      </Item>
      <IconsBar icons={icons} />
    </Container>
  );
};

JobPanel.propTypes = {
  className: PropTypes.string,
};

export default JobPanel;
