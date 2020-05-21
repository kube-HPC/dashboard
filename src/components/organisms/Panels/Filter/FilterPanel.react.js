import { FILTER } from '@config';
import { useFilter } from '@hooks';
import { AutoSuggest } from '@molecules';
import { jobIdsSelector, pipelineNamesSelector } from '@utils';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { styled, tw } from 'twin.macro';

const filterTarget = (target, action) => filter => action({ target, filter });

const FilterPanel = ({ className }) => {
  const jobs = useSelector(jobIdsSelector, shallowEqual);
  const pipelines = useSelector(pipelineNamesSelector, shallowEqual);
  const { setJobsFilter } = useFilter();

  const onFilterJobId = useMemo(() => filterTarget(FILTER.target.jobId, setJobsFilter), [
    setJobsFilter,
  ]);

  const onFilterPipelineName = useMemo(
    () => filterTarget(FILTER.target.pipelineName, setJobsFilter),
    [setJobsFilter],
  );

  return (
    <Container className={className}>
      <h1>Filter Job Table</h1>
      <AutoSuggest placeholder="Job Id" options={jobs} onChange={onFilterJobId} />
      <AutoSuggest
        placeholder="Pipeline Name"
        options={pipelines}
        onChange={onFilterPipelineName}
      />
    </Container>
  );
};

const Container = styled.div`
  ${tw`space-y-2`}
`;

FilterPanel.propTypes = {
  className: PropTypes.string,
};

export default FilterPanel;
