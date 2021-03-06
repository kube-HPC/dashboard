// @flow
import {useJobs, usePanel} from '@hooks';
import {Panel} from '@molecules';
import {createSelector} from '@reduxjs/toolkit';
import {NOOP} from '@utils';
import type {ComponentType} from 'react';
import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import tw, {styled} from 'twin.macro';

const Container = styled.div`
  ${tw`border-orange-500 p-2 border-2`}
`;

const listSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(({key}) => ({jobId: key})) ?? [],
);

export const JobSelectHelper = () => {
  const {select, selected} = useJobs();

  const list = useSelector(listSelector);

  const onChange = useCallback(({target: {value}}) => select(value), [select]);

  useEffect(() => {
    if (selected === null && list.length !== 0) {
      select(list[0]?.jobId);
    }
  }, [list, select, selected]);

  return (
    <Container>
      <select onChange={onChange} onBlur={NOOP}>
        {list.map(({jobId}) => (
          <option key={jobId} value={jobId}>
            {jobId}
          </option>
        ))}
      </select>
      <div>Selected: {selected || `None`}</div>
    </Container>
  );
};

export const InPanel = ({panel}: {panel: string}) => {
  const {set: setValue} = usePanel();
  useEffect(() => {
    setValue(panel);
  }, [setValue]);
  return <Panel />;
};

export const decorate = (Decorator: ComponentType<any>) => [
  (Story: ComponentType<any>) => (
    <Decorator>
      <Story />
    </Decorator>
  ),
];
