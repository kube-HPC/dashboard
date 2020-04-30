import { Graph, Tag } from '@atoms';
import { PRIORITY } from '@constants';
import { useGraph } from '@hooks';
import { JobGraph } from '@molecules';
import { COLORS, mixins } from '@styles';
import { isLightThemeSelector, selectedStatsSelector } from '@utils';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
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
  const isLightTheme = useSelector(isLightThemeSelector);

  const options = useMemo(() => (isLightTheme ? tw`text-black` : tw`text-gray-500`), [
    isLightTheme,
  ]);

  return (
    <Container isExpanded={expanded}>
      {selected && <JobGraph jobGraph={selected} options={options} />}
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
    </Container>
  );
};

JobPanel.propTypes = {
  className: PropTypes.string,
};

export default JobPanel;
