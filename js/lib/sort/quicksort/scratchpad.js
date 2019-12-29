const { randomSequence } = require('../../utils/number');
const runQuicksort = require('./scratchpad.run');

const sequences = [10, 10, 10];

sequences.forEach((seq) => {
  const testArr = randomSequence(0, 100, seq);
  runQuicksort(testArr);
});
