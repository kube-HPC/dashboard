import { SOCIALS } from '@constants';
import { board, monitor } from './connection';

const { GITHUB } = SOCIALS;

const urls = {
  [GITHUB]: `https://github.com/kube-HPC`,
  monitor,
  board,
};

export default urls;
