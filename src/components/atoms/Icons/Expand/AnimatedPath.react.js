import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const pathRotate = {
  expanded: {
    rotate: 180,
  },
  compressed: {
    rotate: 0,
  },
};

const AnimatedPath = ({ d, expanded }) => (
  <motion.path
    initial="compressed"
    d={d}
    animate={expanded ? `expanded` : `compressed`}
    variants={pathRotate}
  />
);
AnimatedPath.propTypes = {
  d: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
};

export default AnimatedPath;
