import { Notification, Text } from '@atoms';
import React from 'react';

const duration = 2;
const SEC_IN_MS = 1000;

/* eslint-disable react/prop-types */
const ShowNameId = ({ jobId }) => (
  <div>
    ID: <Text>{jobId}</Text>
  </div>
);

/* eslint-disable react/display-name */
const config = {
  duration: 1,
  removeDuration: (duration + 1) * SEC_IN_MS,
  components: {
    jobs: {
      downloadResults: jobId => (
        <Notification title="Download Results">
          Job ID: <Text>{jobId}</Text>
        </Notification>
      ),
    },
    pipeline: {
      stopPipeline: jobId => (
        <Notification title="Pipeline Stop">
          <ShowNameId jobId={jobId} />
        </Notification>
      ),
      resume: jobId => (
        <Notification title="Pipeline Resumed">
          <ShowNameId jobId={jobId} />
        </Notification>
      ),
      rerun: jobId => (
        <Notification title="Pipeline Rerun">
          <ShowNameId jobId={jobId} />
        </Notification>
      ),
      pause: jobId => (
        <Notification title="Pipeline Paused">
          <ShowNameId jobId={jobId} />
        </Notification>
      ),
    },
  },
};

export default config;
