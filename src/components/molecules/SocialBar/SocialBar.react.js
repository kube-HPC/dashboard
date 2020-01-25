import { URLS } from '@config';
import { SOCIALS } from '@constants';
import iconMapper from '@icons';
import { mixins, styled, theme } from '@styles';
import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import tw from 'tailwind.macro';

const { primary, secondary } = theme.palette;

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`w-5/6 sm:w-3/4 md:w-3/5 lg:w-2/5`}
`;

const IconContainer = styled(animated.div)``;

const Text = styled.div`
  ${tw`text-lg`}
`;

const Item = styled(animated.a)`
  ${mixins.flexBetween}
  ${tw`flex-col cursor-pointer w-1/12 px-2`}
  transition: margin 1s ease;

  svg,${Text} {
    transition: all 0.5s ease;
  }

  svg {
    ${tw`w-full fill-current`}
  }

  ${Text} {
    ${tw`opacity-0`}
  }

  :hover,:focus {
    ${tw`mx-5`}
    ${Text} {
      ${tw`opacity-100`}
      color: ${`primary`};
    }
    svg {
      color: ${`primary`};
      transform: translateY(-1rem);
    }
  }
`;

const items = Object.values(SOCIALS).map(name => ({
  name,
  url: URLS[name],
  Icon: iconMapper[name],
}));

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
        const { name, url, Icon } = items[index];

        return (
          <Item
            key={index}
            primary={primary}
            style={{ opacity }}
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={name}>
            <IconContainer>
              <Icon />
            </IconContainer>
            <Text>{name}</Text>
          </Item>
        );
      })}
    </Container>
  );
};

export default SocialBar;
