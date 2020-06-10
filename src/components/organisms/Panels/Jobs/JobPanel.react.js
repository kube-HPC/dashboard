import { Graph, Scrollbar, Tag } from '@atoms';
import { GRAPH, PRIORITY } from '@constants';
import { useGraph, usePanel, useUserTheme } from '@hooks';
import { JobGraph, LogsViewer } from '@molecules';
import { mixins } from '@styles';
import { selectedStatsSelector } from '@utils';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useMemo, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { ifProp } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const toggle = p => !p;

const JobPanel = () => {
  const { graph, logs, task, areLogsValid } = useGraph();
  const { nodesStats, priority } = useSelector(selectedStatsSelector, isEqual);
  const { expanded } = usePanel();
  const { theme } = useUserTheme();
  const [isLrDirection, toggleDirection] = useReducer(toggle, true);

  const options = useMemo(
    () => ({ direction: isLrDirection ? GRAPH.direction.LR : GRAPH.direction.UD }),
    [isLrDirection],
  );

  return (
    graph && (
      <Container isExpanded={expanded}>
        <JobGraph jobGraph={graph} options={options} />
        <div>
          <LatestLogs>
            <h2>Node Logs{!areLogsValid && ` Not Available`}</h2>
            <Tag color={theme.colors.task.status[task.status]}>
              <span>{task.nodeName}</span>:<span>{task.algorithmName}</span>
            </Tag>
          </LatestLogs>
          <LogsScroll areLogsValid={areLogsValid}>
            <Scrollbar>{logs && <LogsViewer logs={logs} />}</Scrollbar>
          </LogsScroll>
          {nodesStats && (
            <Item>
              <h2>Node Stats</h2>
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
            <h2>Priority</h2>
            <Tag color={theme.colors.pipeline.priority[priority]}>{PRIORITY[priority]}</Tag>
          </Item>
          <Item>
            <h2>Graph Direction</h2>
            <Button onClick={toggleDirection}>
              {isLrDirection ? `Left to Right` : `Up to Down`}
            </Button>
          </Item>
        </div>
      </Container>
    )
  );
};

const Button = styled.button`
  ${tw`transition-opacity duration-200 ease-in-out`}
  ${tw`border p-2 rounded-md hocus:opacity-50`}
`;

const LogsScroll = styled.div`
  ${mixins.fillContainer}
  ${tw`p-2`}
  ${ifProp(`areLogsValid`, tw`h-40`, tw`hidden`)}
`;

const Item = styled.div`
  ${mixins.flexBetween}
  ${Tag.className} {
    ${tw`mr-1 capitalize`};
    :last-child {
      ${tw`mr-0`};
    }
  }
`;

const LatestLogs = styled(Item)`
  ${Tag.className} {
    ${tw`normal-case`}
    & span {
      &:first-child {
        ${tw`font-semibold`}
      }
    }
  }
`;

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexBetween}
  ${tw`flex-col`}
  ${JobGraph.className} {
    ${tw`flex-grow max-h-1/2`}
    ${Graph.SC} {
      ${ifProp(`isExpanded`, tw`h-64`)}
    }
  }
  & > * {
    ${tw`w-full`}
  }
  ${Item} {
    ${tw`mt-2`}
  }
`;

const Tags = styled.div`
  ${mixins.flexCenter}
`;

JobPanel.propTypes = {
  className: PropTypes.string,
};

export default JobPanel;
