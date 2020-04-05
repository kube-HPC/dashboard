import { useActions } from '@hooks';
import { iconNames } from '@icons';
import { IconsBar } from '@molecules';
import { createSelector } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const pipelineSelector = currJobId =>
  createSelector(
    state => state.jobs,
    ({ dataSource }) => dataSource.find(({ key }) => key === currJobId)?.pipeline,
  );

const { redo, play, pause, stop } = iconNames;
const icons = [redo, play, pause, stop];

const Container = styled(motion.div)``;

const JobActions = ({ className, animate, variants, jobId }) => {
  const {
    pipelines: { rerunRaw },
  } = useActions();

  const pipeline = useSelector(pipelineSelector(jobId), isEqual);

  const actions = useMemo(() => {
    const rerunAction = () => rerunRaw(pipeline);
    return [rerunAction];
  }, [rerunRaw, pipeline]);

  return (
    <Container className={className} initial="hidden" variants={variants} animate={animate}>
      <IconsBar icons={icons} actions={actions} />
    </Container>
  );
};

JobActions.SC = Container;

JobActions.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variants: PropTypes.object.isRequired,
  jobId: PropTypes.string.isRequired,
};

export default JobActions;
