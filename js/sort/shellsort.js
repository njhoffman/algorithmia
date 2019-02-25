
/*
 * Shell Sort
 *  --best    : O(n log(n))
 *  --average : O(n²)
 *  --worst   : O(n²)
 *  --space   : O(1)
 *
*/

const { runSets } = require('../runner');
const { shellSortBasic } = require('./shellsort.funcs');

const shellSortDefs = {
  basic: {
    func: shellSortBasic,
    name: 'Shell Sort',
    fileName: 'listNumbers',
    bigO: {
      best: [
        'log n',
        n => n
      ],
      average: [
        'n²',
        n => n * n
      ],
      worst: [
        'n²',
        n => n * n
      ]
    }
  },
};

const settings = {
  logInterval: 3 * 1000 * 1000,
  runs: [{
    ...shellSortDefs.basic,
    count: 1000
  }, {
    ...shellSortDefs.basic,
    count: 2000
  }, {
    ...shellSortDefs.basic,
    count: 5000
  }]
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { shellSortDefs };
