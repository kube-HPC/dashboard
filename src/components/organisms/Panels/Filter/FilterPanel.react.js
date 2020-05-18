import { AutoSuggest } from '@molecules';
import { jobIdsSelector } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';

const FilterPanel = ({ className }) => {
  const jobs = useSelector(jobIdsSelector, shallowEqual);
  const jobOptions = jobs?.map(jobId => ({ value: jobId, label: jobId })) ?? [];

  return (
    <Container className={className}>
      <h1>Filter Table</h1>
      <AutoSuggest placeholder="Job Id" options={jobOptions} />
    </Container>
  );
};

const Container = styled.div`
  ${tw`space-y-1`}
`;

FilterPanel.propTypes = {
  className: PropTypes.string,
};

export default FilterPanel;
