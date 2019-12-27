const { increment } = require('../../utils/utils');

const quickSort = (arr, config) => {
  if (config.verbose > 2) {
    console.log(`Sort  (n: ${config.n})`, arr);
  }

  if (arr.length < 2) {
    increment(config);
    return arr;
  }

  const pivot = arr[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < arr.length; i += 1) {
    increment(config);
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  const sortedLesser = quickSort(lesser, config);
  const sortedGreater = quickSort(greater, config);
  return sortedLesser.concat(pivot, sortedGreater);
};

module.exports = quickSort;
