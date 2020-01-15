import { Header } from '@components';
import { mixins, styled, theme } from '@styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { animated } from 'react-spring';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col`}
`;

const Item = styled(animated.div)``;

const N = 60;
const NOOP = () => {};

const IntroParallax = ({ transform = NOOP, className }) => (
  <Container className={className}>
    <Item style={transform(N)}>
      <Header small>Hi, my name is</Header>
    </Item>
    <Item style={transform(N - 20)}>
      <Header bg={theme.palette.PRIMARY} color="white">
        Dennis Vash
      </Header>
    </Item>
    <Item style={transform(N - 40)}>
      <Header bg="black" color="white">
        I create things for the web
      </Header>
    </Item>
  </Container>
);

IntroParallax.propTypes = {
  transform: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default memo(IntroParallax);
