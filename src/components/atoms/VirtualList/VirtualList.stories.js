import { SB_LABELS } from '@constants';
import { useJobs } from '@hooks';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
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

export const SocketData = () => {
  const { list } = useJobs();
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
