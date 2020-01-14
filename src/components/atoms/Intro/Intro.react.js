import { styled, theme } from '@styles';
import React from 'react';
import tw from 'tailwind.macro';

const Container = styled.div`
  user-select: none;
`;

const Main = styled.div`
  ${tw`text-6xl text-white leading-snug`}
  width: fit-content;
  background-color: ${`bg`};
`;

const Introduction = styled.h3`
  ${tw`text-3xl`}
`;

const Intro = () => (
  <Container>
    <Introduction>Hi, my name is</Introduction>
    <Main bg={theme.palette.PRIMARY}>Dennis Vash</Main>
    <Main bg="black">I create things for the web</Main>
  </Container>
);

export default Intro;
