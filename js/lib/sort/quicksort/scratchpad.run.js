const quickSort = require('./quicksort');

const verbose = 2;

const runQuicksort = (arr) => {
  const config = { n: 0, verbose };

  const expected = {
    avg: (arr.length * Math.log(arr.length)).toFixed(2),
    best: (arr.length * Math.log(arr.length)).toFixed(2),
    worst: arr.length ** 2,
  };

  if (config.verbose > 0) {
    console.log(`Sorting ${arr.length} numbers`);
  }

  if (config.verbose > 1) {
    console.log(arr);
  }

  const results = quickSort(arr, config);

  const { avg, best, worst } = expected;
  console.log([`${arr.length}`, `On: ${config.n}`, `\tbest: ${best}`, `avg: ${avg}`, `worst: ${worst}`].join('\t'));

  if (config.verbose > 1) {
    console.log(results);
  }
};

module.exports = runQuicksort;
