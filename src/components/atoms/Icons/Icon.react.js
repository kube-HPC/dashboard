import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg``;

const Icon = ({ d, ...props }) => (
  <SVG viewBox="0 0 24 24" {...props}>
    <path d={d} />
  </SVG>
);

Icon.SC = SVG;

Icon.propTypes = {
  d: PropTypes.string.isRequired,
};

export default Icon;
