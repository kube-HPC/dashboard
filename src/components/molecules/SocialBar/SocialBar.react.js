import iconMapper from '@icons';
import { mixins, styled } from '@styles';
import React from 'react';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`w-full p-5`}
  }
`;

const { CodeSandbox, Twitter, StackOverflow, Github } = iconMapper;

const icons = [CodeSandbox, Twitter, StackOverflow, Github];

const SocialBar = () => (
  <Container>
    {icons.map((Icon, key) => (
      <Icon key={key} />
    ))}
  </Container>
);

export default SocialBar;
