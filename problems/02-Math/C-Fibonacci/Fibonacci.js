const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

// O(n)
const fib = (num) => {
  var a = 1, b = 0, temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

// O(2^n)
const fibRecursive = (num) => {
  if (num == 1) return 0;
  if (num <= 1) return 1;
  return fibRecursive(num - 1) + fibRecursive(num - 2);
}

// store value of each index in a hash to avoid computing next N times
// O(n) time, O(n) space
const fibMemo = (num, memo) => {
  memo = memo || {}
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  return memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
}


const f = fibRecursive
console.log(f(1), f(2), f(3), f(4), f(5), f(6));
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// rl.on('line', line => {
//   console.log(line)
//   process.exit(0);
// })
