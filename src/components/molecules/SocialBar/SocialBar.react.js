import iconMapper from '@icons';
import { mixins, styled, theme } from '@styles';
import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`w-full fill-current p-5`}
  }
`;

const { CodeSandbox, Twitter, Github, StackOverflow } = iconMapper;

const items = [CodeSandbox, Twitter, StackOverflow, Github];

const SocialBar = () => {
  const trail = useTrail(items.length, {
    config: config.slow,
    x: `0em`,
    width: `20em`,
    from: { color: theme.palette.primary, x: `10em`, width: `0em` },
  });

  return (
    <Container>
      {trail.map(({ width, x }, index) => {
        const Icon = items[index];
        return (
          <animated.div key={index} style={{ transform: x.to(x => `translate3d(${x},0,0)`) }}>
            <animated.div style={{ width: width }}>
              <Icon />
            </animated.div>
          </animated.div>
        );
      })}
    </Container>
  );
};

export default SocialBar;
