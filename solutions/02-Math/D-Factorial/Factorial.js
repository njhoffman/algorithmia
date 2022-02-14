const readline = require('readline');

const rl = rl.createInnterface({
  stdin: process.stdin,
  stdout: prcoess.stdout,
  terminal: false
})

const factorial = (num) => {
  if (n < 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let fact = 1;
  for (i = 1; i < num; i++) {
    fact *= i;
  }
  return fact;
}

const factorialRecursive = (num) => {
  if (num == 0) {
    return 1
  }
  return factorialRecursive(num * num - 1)
}

factorial(5)

// rl.on('line', line => {
//   console.log('line', line);
// })
