const _ = require('lodash');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const humanMemorySize = (b, si = true) => {
  let bytes = Number(b);
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  do {
    bytes /= thresh;
    u += 1;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return `${bytes.toFixed(1)} ${units[u]}`;
};

const padLeft = (input, len) => {
  const str = input && input.toString() ? input.toString() : '';
  return len > str.length
    ? (new Array(len - str.length + 1)).join(' ') + str
    : str;
};

const padRight = (input, len) => {
  const str = input && input.toString() ? input.toString() : '';
  return len > str.length
    ? str + (new Array(len - str.length + 1)).join(' ')
    : str;
};

// ⁰¹²³⁴⁵⁶⁷⁸⁹ ×
const scientificNotation = (num) => num.toExponential()
  .replace(/e\+?/, ' × 10^')
  .replace(/(?:10\^)(\d)+$/g, (match, exp) => {
    switch (`${exp}`) {
      case '0': return '⁰';
      case '1': return '¹';
      case '2': return '²';
      case '3': return '³';
      case '4': return '⁴';
      case '5': return '⁵';
      case '6': return '⁶';
      case '7': return '⁷';
      case '8': return '⁸';
      case '9': return '⁹';
      default: return '';
    }
  })
  .replace(/× /, '×10')
  .replace(/^(\d) ×/, '$1.00 ×')
  .replace(/\.(\d) ×/, '.$10 ×')
  .replace(/\.(\d\d)(?:\d+) ×/, '.$1 ×');

const padZeros = (num, numZeros) => (Array(numZeros).join('0') + num).slice(-numZeros);

const numCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const memLog = ({ n, startTime, startMemory }) => {
  const {
    heapUsed: hu,
    heapTotal: ht,
    rss,
    external
  } = process.memoryUsage();

  const {
    heapUsed: startHu,
    heapTotal: startHt,
    rss: startRss,
    external: startExternal
  } = startMemory;

  const hms = humanMemorySize;
  const elapsed = ((new Date().getTime() - startTime) / 1000).toFixed(2);
  console.log([
    padRight(`${scientificNotation(n)}`, 10),
    padRight(`${elapsed}s`, 8),
    'heap:',
    chalk.bold(`${hms(hu)}`),
    chalk.green(padRight(`+${hms(hu - startHu)}`, 10)),
    'total:',
    `${hms(ht)}`,
    chalk.green(padRight(`+${hms(ht - startHt)}`, 10)),
    'rss:',
    `${hms(rss)}`,
    chalk.green(padRight(`+${hms(rss - startRss)}`, 10)),
    'external:',
    `${hms(external)}`,
    chalk.green(padRight(`+${hms(external - startExternal)}`, 10))
  ].join(' '));
};

const loadNumbers = (fileName) => {
  const data = fs.readFileSync(
    path.join(__dirname, '..', 'data', `${fileName}.txt`),
    { encoding: 'utf-8' }
  );
  return _.map(`${data}`.split('\n'), _.toNumber);
};

/* eslint-disable no-param-reassign */
const swap = (arr, a, b) => {
  // console.log(`swap ${a} - ${b}`);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

const increment = (config) => {
  config.n += 1;

  const { n, startTime, logInterval } = config;

  if (n % logInterval === 0) {
    memLog(config);
  }
};

const init = ({ logInterval }) => ({
  logInterval,
  n: 0,
  startMemory: process.memoryUsage(),
  startTime: new Date().getTime()
});
/* eslint-enable no-param-reassign */

module.exports = {
  humanMemorySize,
  scientificNotation,
  memLog,
  loadNumbers,
  swap,
  increment,
  init,
  padLeft,
  padRight,
  padZeros,
  numCommas
};
