/*
 * BubbleSort
 *  --best    : On
 *  --average : O(n²)
 *  --worst   : O(n²)
 *  --space   : O(1)
 *
 * step through list and swap with adjacent element
 * repeat passthrough until no more swapping is needed
 *
*/

const { runSets } = require('../runner');
const { bubbleSortBasic } = require('./bubblesort.funcs');

const bubbleSortDefs = {
  basic: {
    func: bubbleSortBasic,
    name: 'BubbleSort Basic',
    fileName: 'listNumbers',
    bigO: {
      best: [
        'n',
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
    ...bubbleSortDefs.basic,
    count: 1000
  }, {
    ...bubbleSortDefs.basic,
    count: 2000
  }, {
    ...bubbleSortDefs.basic,
    count: 5000
  }]
};

// invoked directly from command line
if (require.main === module) {
  runSets(settings);
}

module.exports = { bubbleSortDefs };
