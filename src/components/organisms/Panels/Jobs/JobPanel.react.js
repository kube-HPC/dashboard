import { Graph, Tag } from '@atoms';
import { PRIORITY } from '@constants';
import { useGraph, useUserTheme } from '@hooks';
import { JobGraph } from '@molecules';
import { mixins } from '@styles';
import { selectedStatsSelector } from '@utils';
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
  ${JobGraph.className} {
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
  ${Tag.className} {
    ${tw`mr-1 capitalize`};
    :last-child {
      ${tw`mr-0`};
    }
  }
`;

const Tags = styled.div`
  ${mixins.flexCenter}
`;

const JobPanel = () => {
  const { selected } = useGraph();
  const { nodesStats, priority } = useSelector(selectedStatsSelector, isEqual);
  const { expanded } = useSelector(state => state.panel);
  const { theme } = useUserTheme();

  return (
    <Container isExpanded={expanded}>
      {selected && <JobGraph jobGraph={selected} />}
      {nodesStats && (
        <Item>
          <div>Node Stats</div>
          <Tags>
            {Object.entries(nodesStats).map(([status, count]) => (
              <Tag key={status} color={theme.colors.task.status[status]}>
                {status}: {count}
              </Tag>
            ))}
          </Tags>
        </Item>
      )}
      <Item>
        <div>Priority</div>
        <Tag color={theme.colors.pipeline.priority[priority]}>{PRIORITY[priority]}</Tag>
      </Item>
    </Container>
  );
};

JobPanel.propTypes = {
  className: PropTypes.string,
};

export default JobPanel;
