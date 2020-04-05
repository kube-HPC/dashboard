import { VirtualList } from '@atoms';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
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

// Row size in px
const ROW_SIZE = 75;

const Jobs = ({ className }) => {
  const { jobIdList } = useJobs();

  return (
    <Container className={className}>
      <VirtualList list={jobIdList} itemSize={ROW_SIZE}>
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
