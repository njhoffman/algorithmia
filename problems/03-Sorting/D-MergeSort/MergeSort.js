const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;
  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  var result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

rl.on('line', (line) => {
  const numbers = line.split(' ').map(num => parseInt(num))
  const ret = mergeSort(numbers)
  console.log(...ret)
  process.exit(0)
})
