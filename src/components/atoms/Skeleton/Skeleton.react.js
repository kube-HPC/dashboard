// @flow
import { mixins } from '@styles';
import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type SkeletonProps = {
  className: string,
};

const Skeleton = ({ className }: SkeletonProps) => <Box {...{ className }} />;

const Box = styled.div`
  ${mixins.fillContainer}
  ${tw`border border-black rounded-sm`}
`;

Skeleton.className = Box;

export default Skeleton;
