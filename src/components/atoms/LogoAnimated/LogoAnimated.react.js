import React from 'react';
import { animated, useSpring } from 'react-spring';

const config = { mass: 1, tension: 100, friction: 300 };
const spring = {
  x: 0,
  from: { x: 1000 },
  config,
};

const LogoAnimated = () => {
  const { x } = useSpring(spring);
  return (
    <animated.svg fill="none" viewBox="0 0 248.13 215">
      <animated.path
        strokeDasharray={1000}
        strokeDashoffset={x}
        d="M124.5 216L11.5 21h203m-169 19l79.19 136.5M248 1L136 196l-11.31-19.5m0 0L226 1H0"
        stroke="#000"
      />
    </animated.svg>
  );
};

export default LogoAnimated;
