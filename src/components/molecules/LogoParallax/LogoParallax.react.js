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
const { primary, secondary } = theme.palette;
const empty = `transparent`;

const fillSpring = {
  primary,
  secondary,
  from: { primary: empty, secondary: empty },
  delay: 2000,
};

const LogoParallax = ({ transform = NOOP, className }) => {
  const { primary, secondary } = useSpring(fillSpring);

  return (
    <Container className={className}>
      <Back style={transform(N)}>
        <LogoAnimated fill={secondary} />
      </Back>
      <Front style={transform(N - 10)}>
        <LogoAnimated fill={primary} />
      </Front>
    </Container>
  );
};

LogoParallax.propTypes = {
  transform: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LogoParallax;
