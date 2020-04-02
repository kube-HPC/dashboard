import { useActions } from '@hooks';
import { iconNames } from '@icons';
import { IconsBar } from '@molecules';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const { redo, play, pause, stop } = iconNames;
const icons = [redo, play, pause, stop];

const Container = styled(motion.div)``;

const JobActions = ({ className, animate, variants, pipeline }) => {
  const {
    pipelines: { rerunRaw },
  } = useActions();

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
  pipeline: PropTypes.object.isRequired,
};

export default JobActions;
