const { increment } = require('../../utils/utils');

const insertSort = (arr, config) => {
  const sorted = arr.slice();
  for (let i = 0; i < sorted.length; i += 1) {
    increment(config);
    const tmp = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] > tmp) {
      increment(config);
      sorted[j + 1] = sorted[j];
      j -= 1;
    }
    sorted[j + 1] = tmp;
  }
  return sorted;
};

module.exports = insertSort;

module.exports.definition = {
  oWorst: (n) => n ** 2,
  oAvg: (n) => n ** 2,
  oBest: (n) => n,
  oSpace: (n) => 1,
};
