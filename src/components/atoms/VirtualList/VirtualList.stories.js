import { SB_LABELS } from '@constants';
import { createSelector } from '@reduxjs/toolkit';
import { mapToJobEntry } from '@utils';
import React from 'react';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import VirtualList from './VirtualList.react';

const Container = styled.div`
  ${tw`h-64 border-black m-6 p-2 border-2`}
`;

export default {
  title: `${SB_LABELS.ATOMS}Virtual List`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

const N = 100;
const simpleList = [...Array(N).keys()];

export const Example = () => (
  <VirtualList list={simpleList}>
    {({ index, style, data }) => <div style={style}>Row - {data[index]}</div>}
  </VirtualList>
);

const listSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(mapToJobEntry) ?? [],
);

export const SocketData = () => {
  const list = useSelector(listSelector);
  return (
    <VirtualList list={list}>
      {({ index, style, data }) => (
        <div style={style}>
          Row {index} - {data[index].jobId}
        </div>
      )}
    </VirtualList>
  );
};
