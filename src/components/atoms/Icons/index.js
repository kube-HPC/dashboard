import { SOCIALS } from '@constants';
import IconCodesandbox from './Codesandbox.svg.react';
import IconCV from './CV.svg.react';
import IconDev from './Dev.svg.react';
import IconGithub from './Github.svg.react';
import IconGmail from './Gmail.svg.react';
import IconLinkedin from './Linkedin.svg.react';
import IconMedium from './Medium.svg.react';
import IconStackOverflow from './Stackoverflow.svg.react';
import IconTwitter from './Twitter.svg.react';

const { CV, GITHUB, GMAIL, SANDBOX, SO, TWITTER } = SOCIALS;

const iconMapper = {
  [GITHUB]: IconGithub,
  [SO]: IconStackOverflow,
  [SANDBOX]: IconCodesandbox,
  [TWITTER]: IconTwitter,
  [GMAIL]: IconGmail,
  [CV]: IconCV,
};

export default iconMapper;

export {
  IconGithub,
  IconLinkedin,
  IconStackOverflow,
  IconCodesandbox,
  IconTwitter,
  IconDev,
  IconGmail,
  IconCV,
  IconMedium,
};
