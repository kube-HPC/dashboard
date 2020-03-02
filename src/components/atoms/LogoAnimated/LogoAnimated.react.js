import { theme } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const triangle = 'M1 1h248.125l-123.75 215L1 1z';

const spring = () => ({
  dash: 0,
  config: { mass: 2, tension: 500, friction: 200 },
});

const LogoAnimated = ({ fill = theme.palette.primary }) => {
  const [offset, setOffset] = useState(0);
  const [{ dash }, set] = useSpring(spring);

  const path = useRef();

  useEffect(() => {
    const currLength = path.current.getTotalLength();
    setOffset(currLength);
    set({ from: { dash: currLength } });
  }, [set]);

  return (
    <animated.svg viewBox="0 0 250 217" stroke="black" strokeWidth="0.5">
      <animated.path
        strokeDasharray={offset}
        strokeDashoffset={dash}
        ref={path}
        d={triangle}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        fill={fill}
      />
    </animated.svg>
  );
};

LogoAnimated.propTypes = {
  fill: PropTypes.string,
};

export default LogoAnimated;
