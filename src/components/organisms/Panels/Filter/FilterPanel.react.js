import { FILTER } from '@config';
import { useFilter } from '@hooks';
import { AutoSuggest } from '@molecules';
import { jobIdsSelector } from '@utils';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { styled, tw } from 'twin.macro';

const FilterPanel = ({ className }) => {
  const jobs = useSelector(jobIdsSelector, shallowEqual);
  const jobOptions = jobs?.map(jobId => ({ value: jobId, label: jobId })) ?? [];

  const { setJobsFilter } = useFilter();

  const onFilterJobId = useCallback(
    filterValue => setJobsFilter({ target: FILTER.target.jobId, filter: filterValue }),
    [setJobsFilter],
  );

  return (
    <Container className={className}>
      <h1>Filter Table</h1>
      <AutoSuggest placeholder="Job Id" options={jobOptions} onChange={onFilterJobId} />
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
