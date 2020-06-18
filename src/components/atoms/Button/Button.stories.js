/* @flow */
import { SB_LABELS } from '@constants';
import { decorate } from '@storybookHelpers';
import { mixins } from '@styles';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Button from './Button.react';

export const Example = () => <Button>Example</Button>;

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${mixins.fillScreen}
  ${tw``}
`;

export default {
  title: `${SB_LABELS.ATOMS}Button`,
  component: Button,
  decorators: decorate(Decorator),
};