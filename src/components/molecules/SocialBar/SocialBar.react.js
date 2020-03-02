import { URLS } from '@config';
import { SOCIALS } from '@constants';
import iconMapper from '@icons';
import { mixins, styled, theme } from '@styles';
import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import tw from 'twin.macro';

const { primary, secondary } = theme.palette;

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`w-1/2 sm:w-2/4 md:w-3/5 lg:w-1/3`}
`;

const IconContainer = styled(animated.div)``;

const Item = styled(animated.a)`
  ${mixins.flexBetween}
  ${tw`flex-col cursor-pointer w-1/12 px-2`}

  svg {
    transition: all 0.5s ease;
    ${tw`w-full fill-current`};
    :hover,
    :focus {
      color: ${`primary`};
      transform: translateY(-0.4rem);
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
          </Item>
        );
      })}
    </Container>
  );
};

export default SocialBar;
