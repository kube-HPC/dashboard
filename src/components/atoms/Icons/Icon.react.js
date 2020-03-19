import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ d, ...props }) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d={d} />
  </svg>
);

Icon.propTypes = {
  d: PropTypes.string.isRequired,
};

export default Icon;
