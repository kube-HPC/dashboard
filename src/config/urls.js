import { SOCIALS } from '@constants';
import CONNECTION from './connectionUrls';

const { GITHUB } = SOCIALS;

const urls = {
  [GITHUB]: `https://github.com/kube-HPC`,
  ...CONNECTION,
};

export default urls;
