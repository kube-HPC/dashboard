import { FILTER } from '@config';
import { pipelineTypes } from '@hkube/consts';
import { useFilter } from '@hooks';
import { AutoSuggest, MultiSelect } from '@molecules';
import { mixins } from '@styles';
import { jobIdsSelector, pipelineNamesSelector } from '@utils';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';

const DEFAULT_OPTIONS = Object.values(pipelineTypes).sort();

const filterTarget = (target, action) => filter => action({ target, filter });

const FilterPanel = ({ className }) => {
  const jobs = useSelector(jobIdsSelector, shallowEqual);
  const pipelines = useSelector(pipelineNamesSelector, shallowEqual);
  const { setJobsFilter } = useFilter();

  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const onDeselect = (value, index) =>
    setSelected(p => {
      const copy = [...p];
      copy.splice(index, 1);
      return copy;
    });

  const onSelect = value => setSelected(p => [...p, value]);

  const onFilterJobId = useMemo(() => filterTarget(FILTER.target.jobId, setJobsFilter), [
    setJobsFilter,
  ]);

  const onFilterPipelineName = useMemo(
    () => filterTarget(FILTER.target.pipelineName, setJobsFilter),
    [setJobsFilter],
  );

  useEffect(() => {
    filterTarget(FILTER.target.types, setJobsFilter)(selected);
    setOptions(DEFAULT_OPTIONS.filter(option => !selected.includes(option)));
  }, [selected, setJobsFilter]);

  return (
    <Container className={className}>
      <h1>Filter Job Table</h1>
      <AutoSuggest placeholder="Job Id" options={jobs} onChange={onFilterJobId} />
      <AutoSuggest
        placeholder="Pipeline Name"
        options={pipelines}
        onChange={onFilterPipelineName}
      />
      <MultiSelect {...{ selected, options, onSelect, onDeselect }} placeholder="Job Types" />
    </Container>
  );
};

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`space-y-2 flex-col`}
`;

FilterPanel.propTypes = {
  className: PropTypes.string,
};

export default FilterPanel;
