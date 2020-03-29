import { VirtualList } from '@components';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { areEqual } from 'react-window';
import styled from 'styled-components';
import JobReveal from './JobReveal.react';

const MemoRow = memo(
  ({ data, index, style }) => (
    <div style={style}>
      <JobReveal job={data[index]} />
    </div>
  ),
  areEqual,
);

MemoRow.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

MemoRow.displayName = `List Row`;

const List = styled(VirtualList)``;

const Jobs = ({ className }) => {
  const { list } = useJobs();

  return (
    <List className={className} list={list} itemSize={90}>
      {MemoRow}
    </List>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = List;
Jobs.displayName = `Jobs`;

export default Jobs;
