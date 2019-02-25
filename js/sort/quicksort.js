/*
 * Quicksort
 *  --best    : O(n log(n))
 *  --average : O(n log(n))
 *  --worst   : O(n^2)
 *  --space   : O(n log(n))
 *
 * divide and conquer: split large array into smaller sub-arrays (low and high elements)
 * recursively sort the sub-arrays by splitting into smaller sub-arrays
*/

const { runSets } = require('../runner');
const { quickSortBasic } = require('./quicksort.funcs');

const quickSortDefs = {
  basic: {
    func: quickSortBasic,
    name: 'QuickSort Basic',
    fileName: 'listNumbers',
    bigO: {
      best: [
        'log(n)',
        n => n * Math.log(n)
      ],
      average: [
        'log(n)',
        n => n * Math.log(n)
      ],
      worst: [
        'log(n)',
        n => n * Math.log(n)
      ]
    }
  }
};

const settings = {
  logInterval: 3 * 1000 * 1000,
  runs: [{
    ...quickSortDefs.basic,
    count: 100000
  }, {
    ...quickSortDefs.basic,
    count: 1000000
  }, {
    ...quickSortDefs.basic,
    count: 3000000
  }]
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { quickSortDefs };
