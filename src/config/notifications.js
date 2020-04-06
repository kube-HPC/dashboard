import { Notification, Text } from '@atoms';
import React from 'react';

const duration = 2;
const SEC_IN_MS = 1000;

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const ShowNameId = ({ name, jobId }) => (
  <>
    <div>
      Name: <Text bold>{name}</Text>
    </div>
    <div>
      ID: <Text bold>{jobId}</Text>
    </div>
  </>
);

const config = {
  duration: 2,
  removeDuration: (duration + 1) * SEC_IN_MS,
  components: {
    jobs: {
      downloadResults: ({ jobId }) => (
        <Notification title="Download Results">
          Results for job ID: <Text bold>{jobId}</Text>
        </Notification>
      ),
    },
    pipeline: {
      stopPipeline: args => (
        <Notification title="Pipeline Stop">
          <ShowNameId {...args} />
        </Notification>
      ),
      resume: args => (
        <Notification title="Pipeline Resumed">
          <ShowNameId {...args} />
        </Notification>
      ),
      rerun: args => (
        <Notification title="Pipeline Rerun">
          <ShowNameId {...args} />
        </Notification>
      ),
      pause: args => (
        <Notification title="Pipeline Paused">
          <ShowNameId {...args} />
        </Notification>
      ),
    },
  },
};

export default config;
