const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const bubbleSort = arr => {
  const len = arr.length;
  for (var i = len - 1; i > 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort


rl.on('line', (line) => {
  const numbers = line.split(' ').map(num => parseInt(num))
  const ret = bubbleSort(numbers)
  console.log(...ret)
  process.exit(0)
})
