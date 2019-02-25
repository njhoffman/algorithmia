
/*
 * Quicksort
 *  --best    : O(n log(n))
 *  --average : O(n log(n))
 *  --worst   : O(n^2)
 *
 * divide and conquer: split large array into smaller sub-arrays (low and high elements)
 * recursively sort the sub-arrays by splitting into smaller sub-arrays
 *
*/

const settings = {
  logInterval: 3 * 1000 * 1000,
  fileName: 'listNumbers100k'
};

const chalk = require('chalk');
const { numCommas, loadNumbers, init, memLog, increment, swap } = require('../utils');

const quickSortBasic = (arr, config) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    increment(config);
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSortBasic(lesser, config).concat(pivot, quickSortBasic(greater, config));
};

// const quickSort = (lomuto = false) => (arr, left, right) => {
// };

const start = () => {
  const fmt = (res) => chalk.bold(numCommas(res.length));

  const config = init(settings);
  const unsorted = loadNumbers(settings.fileName);


  console.log(
    `\nRunning quickSortBasic on ${fmt(unsorted)} items\n`
  );

  const results = quickSortBasic(unsorted.slice(), config);

  memLog(config);

  console.log(
    `\nDone with quickSortBasic (${numCommas(config.n)}) on`,
    `${fmt(results)} items\n`
  );
};

start();
