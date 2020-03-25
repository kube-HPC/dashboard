import { JobEntry } from '@components';
import { useJobs } from '@hooks';
import { iconNames } from '@icons';
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const Item = styled(motion.div)`
  ${mixins.flexCenter}
  ${JobEntry.SC} {
    ${tw`flex-grow w-full`}
  }
  ${tw`flex-row cursor-pointer mb-2 z-20`}
`;

const Reveal = styled(motion.div)``;

const reveal = {
  hidden: {
    width: `0%`,
  },
  visible: {
    width: `100%`,
  },
};

const Jobs = ({ className }) => {
  const { list } = useJobs();

  return (
    <Container className={className}>
      {list.map(job => (
        <Item key={job.jobId} whileHover={{ scale: 1.01 }}>
          <JobEntry {...job} />
          <Reveal variants={reveal} initial="hidden" icons={Object.values(iconNames)} />
        </Item>
      ))}
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = Container;

export default Jobs;
