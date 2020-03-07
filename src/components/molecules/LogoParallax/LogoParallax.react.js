import { LogoAnimated } from '@components';
import { REVEAL } from '@config';
import { mixins, styled, theme } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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
const empty = `transparent`;
const { primary, secondary } = theme.palette;

const fillSpring = {
  primary,
  secondary,
  from: { primary: empty, secondary: empty },
  delay: REVEAL.logoFill,
};

const LogoParallax = ({ transform = NOOP, className }) => {
  const { primary, secondary } = useSpring(fillSpring);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 500);
  }, []);

  return (
    reveal && (
      <Container className={className}>
        <Back style={transform(N)}>
          <LogoAnimated fill={secondary} />
        </Back>
        <Front style={transform(N - 10)}>
          <LogoAnimated fill={primary} />
        </Front>
      </Container>
    )
  );
};

LogoParallax.propTypes = {
  transform: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LogoParallax;
