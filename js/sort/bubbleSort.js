/*
 * BubbleSort
 *  --best    : On
 *  --average : O(n^2)
 *  --worst   : O(n^2)
 *
 * step through list and swap with adjacent element
 * repeat passthrough until no more swapping is needed
 *
*/

const settings = {
  logInterval: 3 * 1000 * 1000,
  fileName: 'listNumbers20k'
};

const chalk = require('chalk');
const { numCommas, loadNumbers, init, increment, swap } = require('../utils');

const config = init(settings);
const unsorted = loadNumbers(settings.fileName);

const bubbleSortBasic = (arr) => {
  const sorted = arr.slice();
  for (let i = 0; i < sorted.length; i++) {
    increment(config);
    for (let j = 1; j < sorted.length; j++) {
      increment(config);

      if (sorted[j - 1] > sorted[j]) {
        swap(sorted, j - 1, j);
      }
    }
  }
  return sorted;
};

const bubbleSort = (arr) => { };

const start = () => {
  const fmt = (res) => chalk.bold(numCommas(res.length));
  console.log(
    `\nDone with ${fmt(bubbleSortBasic(unsorted))} items\n`
  );
};

start();
