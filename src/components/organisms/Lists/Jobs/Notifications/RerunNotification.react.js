import { Text } from '@atoms';
import PropTypes from 'prop-types';
import React from 'react';

const RerunNotification = ({ name }) => (
  <div>
    Scheduling pipeline rerun: <Text bold>{name}</Text>
  </div>
);

RerunNotification.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RerunNotification;
