import { useActions } from '@hooks';
import { iconNames } from '@icons';
import { IconsBar } from '@molecules';
import { pipelineSelector } from '@utils';
import { motion } from 'framer-motion';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RerunNotification from './Notifications/RerunNotification.react';

const { redo, fileDownload } = iconNames;
const icons = [redo, fileDownload];

const Container = styled(motion.div)``;

const JobActions = ({ className, animate, variants, jobId }) => {
  const {
    pipelines: { rerunRaw },
    notifications: { add },
  } = useActions();

  const pipeline = useSelector(pipelineSelector(jobId), isEqual);

  const actions = useMemo(() => {
    const rerunAction = () => {
      add(<RerunNotification name={pipeline.name} />);
      rerunRaw(pipeline);
    };
    return [rerunAction];
  }, [rerunRaw, pipeline, add]);

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
