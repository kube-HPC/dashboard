import { useJobActions } from '@hooks';
import { IconsBar } from '@molecules';
import { motion } from 'framer-motion';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)``;

const JobActions = ({ className, animate, variants, jobId }) => {
  const { icons } = useJobActions(jobId);

  return (
    <Container className={className} initial="hidden" variants={variants} animate={animate}>
      <IconsBar icons={icons} />
    </Container>
  );
};

JobActions.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variants: PropTypes.object.isRequired,
  jobId: PropTypes.string.isRequired,
};

const MemoActions = React.memo(JobActions, isEqual);
MemoActions.displayName = `Job Actions`;
MemoActions.className = Container;

export default MemoActions;
