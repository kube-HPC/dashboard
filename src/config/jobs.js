import { spring } from '@styles';

const name = `jobs`;

const reveal = {
  visible: {
    x: 0,
  },
  reveal: {
    opacity: 1,
    display: `block`,
    transition: spring.slow,
  },
  hidden: {
    x: -100,
    opacity: 0,
    display: `none`,
    transition: spring.slow,
  },
  moveRight: {
    x: 10,
    transition: spring.gentle,
  },
};

const item = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const jobs = {
  STATE: {
    name,
    downloadResults: `${name}/downloadResults`,
    getLogs: `${name}/getLogs`,
    select: `${name}/select`,
  },
  ANIMATION: { reveal, item },
};

export default jobs;
