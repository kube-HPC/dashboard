import { IconCompress, IconExpand } from '@icons';
import { NOOP } from '@utils';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const hover = {
  hover: { scale: 1.02 },
};

const pathVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const AnimatedPath = ({ d, key }) => (
  <motion.path
    key={key}
    d={d}
    variants={pathVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
  />
);

AnimatedPath.propTypes = {
  d: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

const Expand = ({ className, onClick = NOOP, expanded = false }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    whileHover="hover"
    onClick={onClick}
    variants={hover}>
    <AnimatePresence>
      <AnimatedPath
        key={expanded ? `expanded` : `compressed`}
        d={expanded ? IconCompress.d : IconExpand.d}
      />
    </AnimatePresence>
  </motion.svg>
);

Expand.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
};

export default Expand;
