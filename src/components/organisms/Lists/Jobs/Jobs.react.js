import { VirtualList } from '@atoms';
import PIPELINE_STATUS from '@hkube/consts/lib/pipeline-statuses';
import { useJobs } from '@hooks';
import { createSelector } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { areEqual } from 'react-window';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobItem from './JobItem.react';

const Container = styled.div`
  ${tw`h-full`}
`;

const RowItem = styled.div`
  ${tw`pr-3 pl-1`}
`;

const MemoRow = memo(
  ({ data, index, style }) => (
    <RowItem style={style}>
      <JobItem jobId={data[index]} />
    </RowItem>
  ),
  areEqual,
);

MemoRow.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

MemoRow.displayName = `List Row`;

const statusSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => {
    const statuses = dataSource?.map(job => job?.status?.status);
    return index => (statuses[index] !== PIPELINE_STATUS.ACTIVE ? 70 : 250);
  },
);

const Jobs = ({ className }) => {
  const { jobIdList } = useJobs();
  const itemSize = useSelector(statusSelector);

  return (
    <Container className={className}>
      <VirtualList list={jobIdList} itemSize={itemSize}>
        {MemoRow}
      </VirtualList>
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = { Container, RowItem };
Jobs.displayName = `Jobs`;
export default Jobs;
