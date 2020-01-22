import React from 'react';
import { animated, useSpring } from 'react-spring';

const config = { mass: 1, tension: 100, friction: 300 };
const spring = {
  x: 0,
  opacity: 1,
  from: { x: 1000, opacity: 0 },
  config,
};

const LogoAnimated = () => {
  const { x, opacity } = useSpring(spring);
  return (
    <animated.svg viewBox="0 0 250 217">
      <animated.path
        strokeDasharray={1000}
        strokeDashoffset={x}
        strokeWidth="1"
        d="M1 1h248.125l-123.75 215L1 1z"
        fill="#842FCF"
        opacity={opacity}
      />
    </animated.svg>
  );
};

export default LogoAnimated;
