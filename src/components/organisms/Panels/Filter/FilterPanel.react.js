import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const FilterPanel = ({ className }) => (
  <Container className={className}>
    <h1>Filter Current Table</h1>
  </Container>
);

FilterPanel.propTypes = {
  className: PropTypes.string,
};

export default FilterPanel;
