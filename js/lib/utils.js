const chalk = require('chalk');

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
  return len > str.length ? new Array(len - str.length + 1).join(' ') + str : str;
};

const padRight = (input, len) => {
  const str = input && input.toString() ? input.toString() : '';
  return len > str.length ? str + new Array(len - str.length + 1).join(' ') : str;
};

const scientificNotation = (num) =>
  num
    .toExponential()
    .replace(/e\+?/, '×10^')
    .replace(/(?:10\^)(\d)+$/g, (match, exp) => {
      switch (`${exp}`) {
        case '0':
          return '⁰';
        case '1':
          return '¹';
        case '2':
          return '²';
        case '3':
          return '³';
        case '4':
          return '⁴';
        case '5':
          return '⁵';
        case '6':
          return '⁶';
        case '7':
          return '⁷';
        case '8':
          return '⁸';
        case '9':
          return '⁹';
        default:
          return '';
      }
    })
    .replace(/×/, '×10')
    .replace(/^(\d)×/, '$1.00×')
    .replace(/\.(\d)×/, '.$10×')
    .replace(/\.(\d\d)(?:\d+)×/, '.$1×');

const padZeros = (num, numZeros) => (Array(numZeros).join('0') + num).slice(-numZeros);

const numCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const memLog = ({ n, startTime, startMemory }) => {
  const { heapUsed: hu, heapTotal: ht, rss, external } = process.memoryUsage();

  const { heapUsed: startHu, heapTotal: startHt, rss: startRss, external: startExternal } = startMemory;

  const hms = humanMemorySize;

  // TODO: make fmtDiffByLine
  const fmtDiff = (a, b, padding) => {
    if (a >= b) {
      return chalk.green(padRight(`+${hms(a - b)}`, padding));
    }
    return chalk.red(padRight(`${hms(a - b)}`, padding));
  };

  const elapsed = ((new Date().getTime() - startTime) / 1000).toFixed(2);
  console.log(
    [
      padRight(`${scientificNotation(n)}`, 10),
      padRight(`${elapsed}s`, 8),
      'heap:',
      chalk.bold(`${hms(hu)}`),
      fmtDiff(hu, startHu, 12),
      'total:',
      `${hms(ht)}`,
      fmtDiff(ht, startHt, 12),
      'rss:',
      `${hms(rss)}`,
      fmtDiff(rss, startRss, 12),
      'external:',
      `${hms(external)}`,
      fmtDiff(external, startExternal, 12),
    ].join(' '),
  );
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
  const { n, logInterval } = config;
  if (n % logInterval === 0) {
    memLog(config);
  }
};

module.exports = {
  humanMemorySize,
  scientificNotation,
  memLog,
  swap,
  increment,
  padLeft,
  padRight,
  padZeros,
  numCommas,
};
