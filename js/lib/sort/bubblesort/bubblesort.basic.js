const { increment, swap } = require('../../utils/utils');

/**
 * (incorrect) bubble sort without exit condition
 * O(n^2) worst, O(n^2) average, O(n^2) best, O(1) space
 */

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

module.exports.definition = {
  oWorst: (n) => n ** 2,
  oAvg: (n) => n ** 2,
  oBest: (n) => n ** 2,
  oSpace: (n) => 1,
};
