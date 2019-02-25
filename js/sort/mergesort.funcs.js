const { increment } = require('../utils');

const mergeTopDown = (left, right, config) => {
  const result = [];

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

const mergeSortTopDown = (arr, config) => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeTopDown(
    mergeSortTopDown(left, config),
    mergeSortTopDown(right, config),
    config
  );
};

/* bottom-up implementation */

const mergeBottomUp = (arr, left, step) => {
  const right = left + step;
  const end = Math.min(left + step * 2 - 1, arr.length - 1);
  const temp = [];

  let leftMoving = left;
  let rightMoving = right;

  for (let i = left; i <= end; i++) {
    if ((arr[leftMoving] <= arr[rightMoving] || rightMoving > end) && leftMoving < right) {
      temp[i] = arr[leftMoving];
      leftMoving++;
    } else {
      temp[i] = arr[rightMoving];
      rightMoving++;
    }
  }

  /* eslint-disable no-param-reassign */
  for (let j = left; j <= end; j++) {
    arr[j] = temp[j];
  }
  /* eslint-enable no-param-reassign */
};

const mergeSortBottomUp = (arr) => {
  let step = 1;
  while (step < arr.length) {
    let left = 0;
    while (left + step < arr.length) {
      mergeBottomUp(arr, left, step);
      left += step * 2;
    }
    step *= 2;
  }
  return arr;
};

module.exports = { mergeSortTopDown, mergeSortBottomUp };
