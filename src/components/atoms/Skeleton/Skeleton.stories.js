// @flow
import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Skeleton from './Skeleton.react';

export const Example = () => (
  <Wrapper>
    <Skeleton />
  </Wrapper>
);

const Wrapper = styled.div`
  ${tw`h-8 w-1/2`}
`;

const Decorator = styled.div`
  ${mixins.fillScreen}
  ${mixins.flexCenter}
`;

export default {
  title: `${SB_LABELS.ATOMS}Skeleton`,
  component: Skeleton,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};
