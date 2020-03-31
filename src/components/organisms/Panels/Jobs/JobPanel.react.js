import { Tag } from '@atoms';
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
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexBetween}
  ${tw`h-full flex-col`}

  >:last-child {
    ${tw`mt-2`}
  }
`;

const NodeStats = styled.div`
  ${mixins.flexBetween}
  ${tw`w-full`}
`;

const Tags = styled.div`
  ${mixins.flexCenter}
  ${Tag.SC} {
    ${tw`mx-1 capitalize`};
  }
`;

const statsSelector = createSelector(
  state => state.jobs,
  ({ dataSource, selected }) => dataSource?.find(({ key }) => key === selected)?.status.data.states,
);
const { play, stop, pause, redo } = iconNames;
const icons = [redo, play, stop, pause];

const JobPanel = ({ className }) => {
  const { selected } = useGraph();
  const nodeStats = useSelector(statsSelector, isEqual);

  return (
    <Container className={className}>
      {selected && <JobGraph jobGraph={selected} />}
      {nodeStats && (
        <NodeStats>
          <div>Node Stats</div>
          <Tags>
            {Object.entries(nodeStats).map(([status, count]) => (
              <Tag key={status} color={COLORS.task.status[status]}>
                {status}: {count}
              </Tag>
            ))}
          </Tags>
        </NodeStats>
      )}
      <IconsBar icons={icons} />
    </Container>
  );
};

JobPanel.propTypes = {
  className: PropTypes.string,
};

export default JobPanel;
