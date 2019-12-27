const topDownMergeSort = require('./mergesort.topdown');
const bottomUpMergeSort = require('./mergesort.bottomup');
const { randomSequence } = require('../../utils/number');

const testArr = randomSequence(0, 100, 10);
const expected = (testArr.length * Math.log(testArr.length)).toFixed(2);

const config = { n: 0, verbose: 1 };

console.log(`Sorting ${testArr.length} numbers`);
if (config.verbose > 1) {
  console.log(testArr);
}

const results = topDownMergeSort(testArr, config);

console.log(`\nResults topDown - (n: ${config.n}, exp: ${expected})\n`);

const results2 = bottomUpMergeSort(testArr, { ...config, n: 0 });
console.log(`\nResults bottomUp - (n: ${config.n}, exp: ${expected})\n`);

if (config.verbose > 1) {
  console.log(results);
  console.log(results2);
}
