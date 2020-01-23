import iconMapper from '@icons';
import { mixins, styled, theme } from '@styles';
import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import tw from 'tailwind.macro';

const { primary, secondary } = theme.palette;

const Container = styled.div`
  ${mixins.flexCenter}
`;

const IconContainer = styled(animated.div)``;

const Text = styled.div``;

const Item = styled(animated.div)`
  ${mixins.flexCenter}
  ${tw`flex-col cursor-pointer`}

  svg {
    ${tw`w-full fill-current p-5`}
    transition: all 0.5s ease;
  }
  ${Text} {
    transition: opacity 1s ease;
    opacity: 0;
  }
  :hover {
    ${Text} {
      opacity: 1;
      color: hsl(272, 63%, 50%);
    }
    svg {
      color: hsl(272, 63%, 50%);
      transform: translateY(-1rem);
    }
  }
`;

const items = Object.entries(iconMapper);

const spring = {
  config: config.molasses,
  color: secondary,
  opacity: 1,
  from: { color: primary, opacity: 0 },
};

const SocialBar = () => {
  const trail = useTrail(items.length, spring);

  return (
    <Container>
      {trail.map(({ opacity }, index) => {
        const [text, Icon] = items[index];

        return (
          <Item key={index} style={{ opacity }}>
            <IconContainer>
              <Icon />
            </IconContainer>
            <Text>{text}</Text>
          </Item>
        );
      })}
    </Container>
  );
};

export default SocialBar;
