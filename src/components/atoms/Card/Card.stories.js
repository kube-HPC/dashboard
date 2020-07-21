import {SB_LABELS} from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card.react';

export const StyledCardExample = () => (
  <PurpleCard>
    Lorem ipsum euismod praesent nullam sapien netus suspendisse gravida placerat aliquet, duis elit
    sagittis lacus in fusce libero nam suspendisse, massa venenatis vehicula potenti tempus in proin
    amet elementum.
  </PurpleCard>
);

const PurpleCard = styled(Card)`
  ${tw`bg-purple-700 text-white`}
`;

export default {
  title: `${SB_LABELS.ATOMS}${Card.name}`,
  component: Card,
};
