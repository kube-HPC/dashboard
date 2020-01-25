import { SOCIALS } from '@constants';
import CVpdf from '../assets/cv.pdf';

const { CV, GITHUB, GMAIL, SANDBOX, SO, TWITTER } = SOCIALS;

const socialUrls = {
  [GITHUB]: `https://github.com/denvash`,
  [TWITTER]: `https://twitter.com/dennisvash`,
  [GMAIL]: `mailto:dennisvash@gmail.com`,
  [CV]: CVpdf,
  [SANDBOX]: `https://codesandbox.io/u/denvash`,
  [SO]: `https://stackoverflow.com/users/7882470/dennis-vash`,
};

export default socialUrls;
