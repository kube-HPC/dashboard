import { LogoAnimated } from '@components';
import { mixins, styled, theme } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  ${mixins.fillContainer}
  ${tw`relative`}
`;

const Back = styled(animated.div)`
  ${tw`absolute w-full`};
`;

const Front = styled(Back)`
  svg {
    ${tw`stroke-current text-primary`}
  }
`;

const N = 20;
const NOOP = () => {};

const fillSpring = {
  frontFill: theme.palette.primary,
  backFill: theme.palette.secondary,
  from: { frontFill: `transparent`, backFill: `transparent` },
  delay: 2000,
};

const LogoParallax = ({ transform = NOOP, className }) => {
  const { frontFill, backFill } = useSpring(fillSpring);

  return (
    <Container className={className}>
      <Back style={transform(N)}>
        <LogoAnimated fill={backFill} />
      </Back>
      <Front style={transform(N - 10)}>
        <LogoAnimated fill={frontFill} />
      </Front>
    </Container>
  );
};

LogoParallax.propTypes = {
  transform: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LogoParallax;
