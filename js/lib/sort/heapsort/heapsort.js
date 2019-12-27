/*
 * Heapsort
 *  --best    : O(n log(n))
 *  --average : O(n log(n))
 *  --worst   : O(n log(n))
 *  --space   : O(1)
 *
 * An improved selection sort: it divides its input into a sorted and an unsorted region,
 * iteratively shrink the unsorted region by extracting the largest element and moving that to the sorted region
 * -- the improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum
 */

const { runSets } = require('../runner');
const { heapSortBasic } = require('./heapsort.funcs');

const heapSortDefs = {
  basic: {
    func: heapSortBasic,
    name: 'Heap Basic',
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
      ...heapSortDefs.basic,
      count: 100000,
    },
    {
      ...heapSortDefs.basic,
      count: 1000000,
    },
    {
      ...heapSortDefs.basic,
      count: 3000000,
    },
  ],
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { heapSortDefs };
