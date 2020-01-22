import { theme } from '@styles';
import React from 'react';
import { animated, useSpring } from 'react-spring';

const { palette } = theme;

const spring = {
  x: 0,
  from: { x: 1000 },
};

const Icon = () => {
  const { x } = useSpring(spring);
  return (
    <animated.svg fill="none" viewBox="0 0 50 50">
      <animated.path
        strokeDasharray={1000}
        strokeDashoffset={x}
        strokeWidth="1"
        fill={palette.secondary}
        d="M25 .619c-13.813 0-25 11.194-25 25 0 11.048 7.162 20.417 17.094 23.719 1.25.235 1.708-.538 1.708-1.202 0-.594-.02-2.167-.031-4.25-6.954 1.508-8.421-3.355-8.421-3.355-1.137-2.885-2.781-3.656-2.781-3.656-2.265-1.55.175-1.519.175-1.519 2.51.175 3.829 2.575 3.829 2.575 2.23 3.823 5.852 2.72 7.281 2.08.225-1.617.869-2.72 1.584-3.344-5.553-.625-11.388-2.775-11.388-12.354 0-2.73.969-4.959 2.573-6.709-.281-.63-1.125-3.173.219-6.616 0 0 2.093-.671 6.875 2.562 2-.556 4.125-.831 6.25-.844 2.125.013 4.25.288 6.25.844 4.75-3.233 6.843-2.562 6.843-2.562 1.344 3.443.5 5.985.25 6.616 1.594 1.75 2.563 3.98 2.563 6.709 0 9.604-5.844 11.718-11.406 12.333.875.75 1.687 2.283 1.687 4.625 0 3.346-.031 6.033-.031 6.846 0 .656.437 1.437 1.719 1.187C42.844 46.025 50 36.65 50 25.62c0-13.806-11.194-25-25-25"
      />
    </animated.svg>
  );
};

export default Icon;
