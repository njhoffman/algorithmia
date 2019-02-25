const { increment, swap } = require('../utils');

const bubbleSortBasic = (arr, config) => {
  const sorted = arr.slice();
  for (let i = 0; i < sorted.length; i++) {
    increment(config);
    for (let j = 1; j < sorted.length; j++) {
      increment(config);

      if (sorted[j - 1] > sorted[j]) {
        swap(sorted, j - 1, j);
      }
    }
  }
  return sorted;
};

module.exports = { bubbleSortBasic };
