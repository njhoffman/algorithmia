const { memLog } = require('./memory');

/* eslint-disable no-param-reassign */
const swap = (arr, a, b) => {
  // console.log(`swap ${a} - ${b}`);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

const increment = (config) => {
  config.n += 1;
  const { n, logInterval } = config;
  if (n % logInterval === 0) {
    memLog(config);
  }
};

module.exports = {
  memLog,
  swap,
  increment,
};
