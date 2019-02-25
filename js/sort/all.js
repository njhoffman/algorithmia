/*
 * Combined sort sets
*/

const _ = require('lodash');
const { runSets } = require('../runner');

const { bubbleSortDefs } = require('./bubblesort');
const { quickSortDefs } = require('./quicksort');
const { mergeSortDefs } = require('./mergesort');
const { heapSortDefs } = require('./heapsort');

const allDefs = [
  bubbleSortDefs.basic,
  quickSortDefs.basic,
  heapSortDefs.basic,
  mergeSortDefs.topDown,
  mergeSortDefs.bottomUp
];

const data = [1000, 5000, 10000];
// const data = false;

const byType = [].concat(
  (data || [1000, 2000, 5000])
    .map(n => ({ ...bubbleSortDefs.basic, count: n })),
  (data || [100000, 1000000, 3000000])
    .map(n => ({ ...quickSortDefs.basic, count: n })),
  (data || [100000, 1000000, 3000000])
    .map(n => ({ ...heapSortDefs.basic, count: n })),
  (data || [50000, 100000, 200000])
    .map(n => ({ ...mergeSortDefs.topDown, count: n })),
  (data || [50000, 100000, 200000])
    .map(n => ({ ...mergeSortDefs.bottomUp, count: n })),
);

const bySpeed = _.flatten(
  (data || [1000, 5000, 10000])
    .map(n => allDefs.map(
      def => ({
        ...def,
        count: n
      })
    ))
);

const settings = {
  logInterval: 3 * 1000 * 1000,
  // runs: byType || bySpeed
  runs: bySpeed || byType
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}
