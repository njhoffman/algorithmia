const { padRight } = require('../../utils/format');

const verbose = 0;

const runBubbleSort = (name, arr, func, expected) => {
  const config = { n: 0, verbose };

  if (config.verbose > 0) {
    console.log(`Sorting ${arr.length} numbers`);
    if (config.verbose > 1) {
      console.log(arr);
    }
  }

  const results = func(arr, config);
  const { avg, best, worst } = expected;
  console.log(
    [
      padRight(`${name}`, 10),
      padRight(`  n: ${arr.length}`, 15),
      padRight(`On: ${config.n}`, 15),
      padRight(`best: ${best}`, 15),
      padRight(`avg: ${avg}`, 15),
      `worst: ${worst}`,
    ].join(' '),
  );
  if (config.verbose > 1) {
    console.log(results);
  }
};

module.exports = runBubbleSort;
