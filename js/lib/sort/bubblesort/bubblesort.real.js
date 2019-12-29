const { increment, swap } = require('../../utils/utils');

/**
 * real bubble sort (avoid loops if no swapping),
 * O(n^2) worst, O(n^2) average, O(n) best, O(1) space
 */

const bubbleSort = (arr, config) => {
  const sorted = arr.slice();

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < sorted.length; i += 1) {
      increment(config);
      if (sorted[i] > sorted[i + 1]) {
        swap(sorted, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return sorted;
};

module.exports = bubbleSort;
module.exports.definition = {
  oWorst: (n) => n ** 2,
  oAvg: (n) => n ** 2,
  oBest: (n) => n * Math.log(n),
  oSpace: (n) => n,
};
