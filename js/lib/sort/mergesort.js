/*
 * Mergesort
 *  --best    : O(n log(n))
 *  --average : O(n log(n))
 *  --worst   : O(n log(n))
 *  --space   : O(n)
 *
 * divide and conquer: split array into n sublists each with 1 element
 * recursively merge sublists to produce new sorted sublist until 1 remaining
 */

const { runSets } = require('../runner');
const { mergeSortTopDown, mergeSortBottomUp } = require('./mergesort.funcs');

const mergeSortDefs = {
  topDown: {
    func: mergeSortTopDown,
    name: 'Merge TopDown',
    fileName: 'listNumbers',
    bigO: {
      best: ['log(n)', (n) => n * Math.log(n)],
      average: ['log(n)', (n) => n * Math.log(n)],
      worst: ['log(n)', (n) => n * Math.log(n)],
    },
  },
  bottomUp: {
    func: mergeSortBottomUp,
    name: 'Merge BottomUp',
    fileName: 'listNumbers',
    bigO: {
      best: ['log(n)', (n) => n * Math.log(n)],
      average: ['log(n)', (n) => n * Math.log(n)],
      worst: ['log(n)', (n) => n * Math.log(n)],
    },
  },
};

const settings = {
  logInterval: 3 * 1000 * 1000,
  runs: [
    {
      ...mergeSortDefs.topDown,
      count: 100000,
    },
    {
      ...mergeSortDefs.topDown,
      count: 200000,
    },
    {
      ...mergeSortDefs.topDown,
      count: 500000,
    },
  ],
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { mergeSortDefs };
