/*
 * Insertion Sort
 *  --best    : O(n)
 *  --average : O(n²)
 *  --worst   : O(n²)
 *  --space   : O(1)
 *
 * insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list
 * each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain
 * similar to sorting cards
 */

const { runSets } = require('../runner');
const { insertSortBasic } = require('./insertsort.funcs');

const insertSortDefs = {
  basic: {
    func: insertSortBasic,
    name: 'Insert Sort',
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
      ...insertSortDefs.basic,
      count: 1000,
    },
    {
      ...insertSortDefs.basic,
      count: 2000,
    },
    {
      ...insertSortDefs.basic,
      count: 5000,
    },
  ],
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { insertSortDefs };
