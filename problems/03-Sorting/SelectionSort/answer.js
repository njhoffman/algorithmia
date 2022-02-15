const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const selectionSort = (arr) => {
  let minIdx, temp, len = arr.length;
  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

module.exports = selectionSort

rl.on('line', (line) => {
  const numbers = line.split(' ').map(num => parseInt(num))
  const ret = selectionSort(numbers)
  console.log(...ret)
  process.exit(0)
})
