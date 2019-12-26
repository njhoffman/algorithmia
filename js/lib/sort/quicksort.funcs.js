const { increment } = require('../utils');

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

module.exports = { quickSortBasic };
