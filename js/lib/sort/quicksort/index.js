/*
 * Quicksort
 *  --best    : O(n log(n))
 *  --average : O(n log(n))
 *  --worst   : O(n²)
 *  --space   : O(n log(n))
 *
 * divide and conquer:
 *   split large array into smaller sub-arrays (low and high elements)
 *   recursively sort the sub-arrays by splitting into smaller sub-arrays
 */

const { runSets } = require('../../runner');
const { quickSortBasic } = require('./quicksort');

const quickSortDefs = {
  basic: {
    func: quickSortBasic,
    name: 'Quick Basic',
    fileName: 'listNumbers',
    bigO: {
      best: ['log(n)', (n) => n * Math.log(n)],
      average: ['log(n)', (n) => n * Math.log(n)],
      worst: ['n²', (n) => n * Math.log(n)],
    },
  },
};

const settings = {
  logInterval: 3 * 1000 * 1000,
  runs: [
    {
      ...quickSortDefs.basic,
      count: 500000,
    },
    {
      ...quickSortDefs.basic,
      count: 1000000,
    },
    {
      ...quickSortDefs.basic,
      count: 3000000,
    },
  ],
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { quickSortDefs };
