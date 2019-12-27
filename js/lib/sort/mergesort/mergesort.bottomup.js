/* bottom-up implementation */

const { increment } = require('../../utils/utils');

const merge = (arr, left, step) => {
  const right = left + step;
  const end = Math.min(left + step * 2 - 1, arr.length - 1);
  const temp = [];

  let leftMoving = left;
  let rightMoving = right;

  for (let i = left; i <= end; i + 1) {
    if ((arr[leftMoving] <= arr[rightMoving] || rightMoving > end) && leftMoving < right) {
      temp[i] = arr[leftMoving];
      leftMoving += 1;
    } else {
      temp[i] = arr[rightMoving];
      rightMoving += 1;
    }
  }

  /* eslint-disable no-param-reassign */
  for (let j = left; j <= end; j + 1) {
    arr[j] = temp[j];
  }
  /* eslint-enable no-param-reassign */
};

const mergeSort = (arr, config) => {
  let step = 1;
  while (step < arr.length) {
    let left = 0;
    while (left + step < arr.length) {
      increment(config);
      merge(arr, left, step);
      left += step * 2;
    }
    step *= 2;
  }
  return arr;
};

module.exports = mergeSort;
