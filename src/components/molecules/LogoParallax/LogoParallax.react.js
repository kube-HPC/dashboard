import { LogoAnimated } from '@components';
import { styled } from '@styles';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import tw from 'tailwind.macro';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = delta => (x, y) => `translate3d(${x / delta}px,${y / delta}px,0)`;

const Container = styled.div`
  ${tw`w-full h-full flex justify-center items-center`}
`;

const Front = styled(animated.div)`
  ${tw`absolute w-1/3`}
`;

const Back = styled(Front)`
  path {
    fill: #000000;
  }
`;

const spring = () => ({
  xy: [-500, 200],
  config: { mass: 10, tension: 550, friction: 140 },
});

const LogoParallax = () => {
  const [{ xy }, set] = useSpring(spring);

  return (
    <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Back style={{ transform: xy.to(trans(20)) }}>
        <LogoAnimated />
      </Back>
      <Front style={{ transform: xy.to(trans(10)) }}>
        <LogoAnimated />
      </Front>
    </Container>
  );
};

export default LogoParallax;
