import { Header } from '@components';
import { mixins, styled, theme } from '@styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { animated, config, useSprings } from 'react-spring';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col`}
`;

const { palette } = theme;

const Item = styled(animated.div)``;

const N = 60;
const NOOP = () => {};

const generateSpring = delta => ({
  config: config.wobbly,
  opacity: 1,
  delay: (delta + 1) * 1500,
  y: 0,
  from: { opacity: 0, y: 50 },
});

const TOTAL_HEADERS = 3;

const IntroParallax = ({ transform = NOOP, className }) => {
  const [first, second, third] = useSprings(
    TOTAL_HEADERS,
    [...Array(TOTAL_HEADERS).keys()].map(generateSpring),
  );

  return (
    <Container className={className}>
      <Item style={{ ...transform(N), ...first }}>
        <Header small>Hi, my name is</Header>
      </Item>
      <Item style={{ ...transform(N - 20), ...second }}>
        <Header bg={palette.primary} color="white">
          Dennis Vash
        </Header>
      </Item>
      <Item style={{ ...transform(N - 40), ...third }}>
        <Header bg={palette.secondary} color="white">
          I create things for the web
        </Header>
      </Item>
    </Container>
  );
};

IntroParallax.propTypes = {
  transform: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default memo(IntroParallax);
