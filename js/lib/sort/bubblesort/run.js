const verbose = 0;

const runBubbleSort = (arr, func, expected) => {
  const config = { n: 0, verbose };

  if (config.verbose > 0) {
    console.log(`Sorting ${arr.length} numbers`);
  }

  if (config.verbose > 1) {
    console.log(arr);
  }

  const results = func(arr, config);

  const { avg, best, worst } = expected;
  console.log([`${arr.length}`, `On: ${config.n}`, `\tbest: ${best}`, `avg: ${avg}`, `worst: ${worst}`].join('\t'));

  if (config.verbose > 1) {
    console.log(results);
  }
};

module.exports = runBubbleSort;
