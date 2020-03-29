import { VirtualList } from '@components';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import JobReveal from './JobReveal.react';

const List = styled(VirtualList)``;

const JobRow = ({ index, style, data }) => (
  <div style={style}>
    <JobReveal job={data[index]} />
  </div>
);

const Jobs = ({ className }) => {
  const { list } = useJobs();

  return (
    <List className={className} list={list} itemSize={90}>
      {JobRow}
    </List>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = List;
Jobs.displayName = `Jobs`;

export default Jobs;
