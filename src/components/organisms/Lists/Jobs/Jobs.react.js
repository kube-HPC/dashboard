import { VirtualList } from '@components';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { areEqual } from 'react-window';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobReveal from './JobReveal.react';

const Container = styled.div`
  ${tw`h-full`}
`;

const RowItem = styled.div`
  ${tw`pr-3 pl-1`}
`;

const MemoRow = memo(
  ({ data, index, style }) => (
    <RowItem style={style}>
      <JobReveal job={data[index]} />
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

const Jobs = ({ className }) => {
  const { list } = useJobs();

  return (
    <Container className={className}>
      <VirtualList list={list} itemSize={90}>
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
