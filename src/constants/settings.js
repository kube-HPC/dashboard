export const LOG_SOURCE = {
  k8s: `Kubernetes`,
  es: `Elastic Search`,
};

const settings = {
  logSource: Object.values(LOG_SOURCE),
};

export default settings;
