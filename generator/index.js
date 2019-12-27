const fs = require('fs');
const _ = require('lodash');
const chalk = require('chalk');
// const faker = require('faker');

const num = 10000;
const outFile = '../data/listNumbers-10000.txt';

const generateRandomNumber = () => _.random(0, num * 10);

const numCommas = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

console.log(chalk.bold('\n\n**Data Generator**\n\n'));

console.log(`Generating ${chalk.cyan(numCommas(num))} random numbers to ${outFile}...\n`);
const numbers = _.times(num, generateRandomNumber);
fs.writeFileSync(outFile, numbers.join('\n'), { encoding: 'utf-8' });
console.log('Done');
