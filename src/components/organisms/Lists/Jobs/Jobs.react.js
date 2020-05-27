import { VirtualList } from '@atoms';
import { useJobs } from '@hooks';
import { spring } from '@styles';
import { itemSizeSelector } from '@utils';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { areEqual } from 'react-window';
import tw, { styled } from 'twin.macro';
import JobItem from './JobItem.react';

const Container = styled.div`
  ${tw`h-full`}
`;

const RowItem = styled(motion.div)`
  ${tw`pr-3 pl-1`}
`;

const MemoRow = memo(({ data, index, style }) => {
  const { height, ...rest } = style;
  return (
    <RowItem style={rest} animate={{ height, transition: spring.gentle }}>
      <JobItem jobId={data[index]} />
    </RowItem>
  );
}, areEqual);

MemoRow.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

MemoRow.displayName = `List Row`;

const Jobs = ({ className }) => {
  const { jobIdList } = useJobs();
  const itemSize = useSelector(itemSizeSelector);

  return (
    <Container className={className}>
      <AnimatePresence>
        <VirtualList list={jobIdList} itemSize={itemSize}>
          {MemoRow}
        </VirtualList>
      </AnimatePresence>
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = { Container, RowItem };
Jobs.displayName = `Jobs`;
export default Jobs;
