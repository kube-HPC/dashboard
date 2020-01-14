import { Header } from '@components';
import { styled, theme } from '@styles';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import tw from 'tailwind.macro';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = delta => (x, y) => `translate3d(${x / delta}px,${y / delta}px,0)`;

const Container = styled.div`
  ${tw`w-full h-full flex justify-center items-center`}
`;

const Front = styled(animated.div)``;

const spring = () => ({
  xy: [-500, 200],
  config: { mass: 10, tension: 550, friction: 140 },
});

const IntroParallax = () => {
  const [{ xy }, set] = useSpring(spring);

  return (
    <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Front style={{ transform: xy.to(trans(20)) }}>
        <Header small>Hi, my name is</Header>
        <Header bg={theme.palette.PRIMARY} color="white">
          Dennis Vash
        </Header>
        <Header bg="black" color="white">
          I create things for the web
        </Header>
      </Front>
    </Container>
  );
};

export default IntroParallax;
