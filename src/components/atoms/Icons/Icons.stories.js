import { SB_LABELS } from '@constants';
import iconMapper from '@icons';
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

const { CodeSandbox, Dev, Github, Linkedin, Medium, StackOverflow, Twitter } = iconMapper;

export const github = Github;
export const dev = Dev;
export const codeSandbox = CodeSandbox;
export const linkedin = Linkedin;
export const medium = Medium;
export const stackOverflow = StackOverflow;
export const twitter = Twitter;
