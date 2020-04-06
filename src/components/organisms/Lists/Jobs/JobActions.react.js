import { useJobActions } from '@hooks';
import { iconNames } from '@icons';
import { IconsBar } from '@molecules';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const { redo, fileDownload } = iconNames;
const icons = [redo, fileDownload];

const Container = styled(motion.div)``;

const JobActions = ({ className, animate, variants, jobId }) => {
  const actions = useJobActions(jobId);

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
