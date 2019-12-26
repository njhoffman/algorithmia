/*
 * Select Sort
 *  --best    : O(n²)
 *  --average : O(n²)
 *  --worst   : O(n²)
 *  --space   : O(1)
 *
 */

const { runSets } = require('../runner');
const { selectSortBasic } = require('./selectsort.funcs');

const selectSortDefs = {
  basic: {
    func: selectSortBasic,
    name: 'Select Sort',
    fileName: 'listNumbers',
    bigO: {
      best: ['n', (n) => n],
      average: ['n²', (n) => n * n],
      worst: ['n²', (n) => n * n],
    },
  },
};

const settings = {
  logInterval: 3 * 1000 * 1000,
  runs: [
    {
      ...selectSortDefs.basic,
      count: 1000,
    },
    {
      ...selectSortDefs.basic,
      count: 2000,
    },
    {
      ...selectSortDefs.basic,
      count: 5000,
    },
  ],
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { selectSortDefs };
