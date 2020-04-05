import { useJobs } from '@hooks';
import { NOOP } from '@utils';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`border-black p-2 border-2 m-2`}
`;

export const JobSelectHelper = () => {
  const { select, list, selected } = useJobs();

  const onChange = useCallback(({ target: { value } }) => select(value), [select]);

  useEffect(() => {
    if (selected === null && list.length !== 0) {
      select(list[0]?.jobId);
    }
  }, [list, select, selected]);

  return (
    <Container>
      <select onChange={onChange} onBlur={NOOP}>
        {list.map(({ jobId }) => (
          <option key={jobId} value={jobId}>
            {jobId}
          </option>
        ))}
      </select>
      <div>Selected: {selected || `None`}</div>
    </Container>
  );
};
