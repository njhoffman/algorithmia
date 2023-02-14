const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const insertionSort = (arr) => {
  let i, len = arr.length, el, j;

  for (i = 1; i < len; i++) {
    el = arr[i];
    j = i;

    while (j > 0 && arr[j - 1] > el) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = el;
  }

  return arr;
}

rl.on('line', (line) => {
  const numbers = line.split(' ').map(num => parseInt(num))
  const ret = insertionSort(numbers)
  console.log(...ret)
  process.exit(0)
})
