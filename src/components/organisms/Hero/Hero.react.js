import { IntroParallax, LogoParallax, SocialBar } from '@components';
import { mixins, styled } from '@styles';
import React, { useCallback } from 'react';
import { config, useSpring } from 'react-spring';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full`}
  flex-basis: 50vh;
`;

const Logo = styled(LogoParallax)`
  ${tw`w-1/4 absolute z-0`}
  right: 15rem;
`;

const Intro = styled(IntroParallax)`
  ${tw`z-10`}
`;

const Container = styled.div`
  ${mixins.flexCenter}
  ${mixins.fillContainer}
  ${tw`flex-col`}
`;

const spring = () => ({
  xy: [-500, 200],
  config: config.gentle,
});

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = delta => (x, y) => `translate3d(${x / delta}px,${y / delta}px,0)`;

const Hero = () => {
  const [{ xy }, set] = useSpring(spring);

  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: calc(x, y) }), [set]);
  const transform = useCallback(delta => ({ transform: xy.to(trans(delta)) }), [xy]);

  return (
    <Container onMouseMove={onMouseMove}>
      <Wrapper>
        <Intro transform={transform} />
        <Logo transform={transform} />
      </Wrapper>
      <SocialBar />
    </Container>
  );
};

export default Hero;
