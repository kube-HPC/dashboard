import {
  IconCodesandbox,
  IconGithub,
  IconLinkedin,
  IconStackOverflow,
  IconTwitter,
  IconDev,
  IconMedium,
} from '@components/icons';
import React from 'react';
import { socialMedia } from '@config';

const { GITHUB, CODESANDBOX, DEV, LINKEDIN, STACKOVERFLOW, TWITTER, MEDIUM } = socialMedia;

const iconMapper = {
  [GITHUB.name]: <IconGithub />,
  [STACKOVERFLOW.name]: <IconStackOverflow />,
  [CODESANDBOX.name]: <IconCodesandbox />,
  [DEV.name]: <IconDev />,
  [LINKEDIN.name]: <IconLinkedin />,
  [TWITTER.name]: <IconTwitter />,
  [MEDIUM.name]: <IconMedium />,
};

export default iconMapper;
