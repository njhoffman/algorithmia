const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const getGCD = (num1, num2) => {
  let gcd;
  for (let i = 0; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}

let args = []
rl.on('line', line => {
  console.log("LINE")
  args.push(line)
  if (args.length == 2) {
    console.log(getGCD(...args))
    // process.exit(0)
  }
})
