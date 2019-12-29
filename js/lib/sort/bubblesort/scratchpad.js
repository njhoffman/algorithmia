const { randomSequence } = require('../../utils/number');

const bubbleSortOptimized = require('./bubblesort.optimized');
const bubbleSortBasic = require('./bubblesort.basic');
const runBubbleSort = require('./scratchpad.run');

const sequences = [10, 10, 10, 10, 50, 50, 50];

sequences.forEach((seq) => {
  const arr = randomSequence(0, 100, seq);

  const expected = {
    best: arr.length ** 2,
    avg: arr.length ** 2,
    worst: arr.length ** 2,
  };

  runBubbleSort('basic', arr, bubbleSortBasic, expected);
  runBubbleSort('optimized', arr, bubbleSortOptimized, { ...expected, best: arr.length });
});
