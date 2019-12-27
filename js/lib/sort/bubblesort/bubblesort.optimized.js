const { increment, swap } = require('../../utils/utils');

/* optimized (avoid some loops), O(n^2) average, O(n) best */

const bubbleSort = (arr, config) => {
  const sorted = arr.slice();

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < sorted.length; i += 1) {
      increment(config);
      if (sorted[i] && sorted[i + 1] && sorted[i] > sorted[i + 1]) {
        swap(sorted, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return sorted;
};

module.exports = bubbleSort;
