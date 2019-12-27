const { increment, swap } = require('../../utils/utils');

/* basic implementation, not optimized */

const bubbleSort = (arr, config) => {
  const sorted = arr.slice();
  for (let i = 0; i < sorted.length; i += 1) {
    increment(config);
    for (let j = 1; j < sorted.length; j += 1) {
      increment(config);
      if (sorted[j - 1] > sorted[j]) {
        swap(sorted, j - 1, j);
      }
    }
  }
  return sorted;
};

module.exports = bubbleSort;
