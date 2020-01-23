import { SB_LABELS } from '@constants';
import iconMapper, { IconDev, IconLinkedin, IconMedium } from '@icons';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`fill-current w-1/3`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Icons`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

const { CodeSandbox, Github, StackOverflow, Twitter } = iconMapper;

export const github = Github;
export const dev = IconDev;
export const codeSandbox = CodeSandbox;
export const linkedin = IconLinkedin;
export const medium = IconMedium;
export const stackOverflow = StackOverflow;
export const twitter = Twitter;
