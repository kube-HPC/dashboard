import { LogoAnimated } from '@components';
import { IconPolygon } from '@icons';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 20}px,0)`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Item = styled(animated.div)`
  ${tw`absolute w-1/3`}
  will-change: transform;
`;

const spring = () => ({
  xy: [0, 0],
  config: { mass: 10, tension: 550, friction: 140 },
});

const LogoParallax = () => {
  const [{ xy }, set] = useSpring(spring);

  return (
    <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Item style={{ transform: xy.to(trans1) }}>
        <IconPolygon />
      </Item>
      <Item style={{ transform: xy.to(trans2) }}>
        <LogoAnimated />
      </Item>
    </Container>
  );
};

export default LogoParallax;
