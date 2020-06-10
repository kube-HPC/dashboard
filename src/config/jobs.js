import { spring } from '@styles';
import tw from 'twin.macro';

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
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

const showDetails = {
  hidden: { opacity: 0, height: 0, transition: spring.gentle },
  visible: { opacity: 1, height: tw`h-40`.height, transition: spring.gentle },
};

const jobs = {
  STATE: {
    name,
    downloadResults: `${name}/downloadResults`,
    getLogs: `${name}/getLogs`,
    select: `${name}/select`,
    addExperiment: `${name}/addExperiment`,
    deleteExperiment: `${name}/deleteExperiment`,
  },
  ANIMATION: { reveal, item, showDetails },
  URL: {
    experiment: `experiment`,
  },
};

export default jobs;
