/*
 * top-down implementation
 *  -recursively split list into sublists until sublist size is 1
 *  -merge sublists to produce sorted list
 */

const { increment } = require('../../utils/utils');

const merge = (left, right, config) => {
  const result = [];

  if (config.verbose) {
    console.log(`Merge (n: ${config.n})`, left, right);
  }

  while (left.length && right.length) {
    increment(config);
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left.slice()).concat(right.slice());
};

const mergeSort = (arr, config) => {
  if (config.verbose > 1) {
    console.log(`Sort  (n: ${config.n})`, arr);
  }

  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left, config);
  const sortedRight = mergeSort(right, config);
  return merge(sortedLeft, sortedRight, config);
};

module.exports = mergeSort;
