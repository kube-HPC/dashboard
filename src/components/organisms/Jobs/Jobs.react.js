import { JobEntry } from '@components';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import styled from 'styled-components';
import tw from 'twin.macro';

const ListItem = styled(JobEntry)`
  ${tw`my-2`}
`;

const Jobs = ({ className }) => {
  const { jobs } = useJobs();

  return (
    jobs && (
      <AutoSizer>
        {({ height, width }) => (
          <List
            className={className}
            itemKey={({ key }) => key}
            height={height}
            width={width}
            itemSize={5}
            itemCount={100}>
            {({ index, style }) => (
              <ListItem key={jobs[index].key} job={jobs[index]} style={style} />
            )}
          </List>
        )}
      </AutoSizer>
    )
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

export default Jobs;
