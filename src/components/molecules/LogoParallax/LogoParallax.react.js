import { LogoAnimated } from '@components';
import { mixins, styled, theme } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import { animated } from 'react-spring';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full h-full relative`}
`;

const Front = styled(animated.div)`
  ${tw`absolute w-full`};
  path {
    fill: ${theme.palette.primary};
  }
`;

const Back = styled(Front)``;

const N = 20;
const NOOP = () => {};

const LogoParallax = ({ transform = NOOP, className }) => (
  <Container className={className}>
    <Back style={transform(N)}>
      <LogoAnimated />
    </Back>
    <Front style={transform(N - 10)}>
      <LogoAnimated />
    </Front>
  </Container>
);

LogoParallax.propTypes = {
  transform: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LogoParallax;
