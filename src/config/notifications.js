import { Text } from '@atoms';
import React from 'react';

const duration = 3;
const SEC_IN_MS = 1000;

const config = {
  duration: 2,
  removeDuration: (duration + 1) * SEC_IN_MS,
  components: payload => ({
    jobRerun: (
      <>
        Pipeline rerun started with job ID: <Text bold>{payload.jobId}</Text>
      </>
    ),
  }),
};

export default config;
