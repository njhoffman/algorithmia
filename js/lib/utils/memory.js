const windowSize = require('window-size');
const chalk = require('chalk');

const { padRight } = require('./format');
const { scientificNotation } = require('./number');

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

const memLog = ({ n, startTime, startMemory }) => {
  const { heapUsed: hu, heapTotal: ht, rss } = process.memoryUsage();

  const { heapUsed: startHu, heapTotal: startHt, rss: startRss } = startMemory;

  const hms = humanMemorySize;

  // TODO: make fmtDiffByLine
  const fmtDiff = (a, b, padding) => {
    if (a >= b) {
      return chalk.green(padRight(`+${hms(a - b)}`, padding));
    }
    return chalk.red(padRight(`${hms(a - b)}`, padding));
  };

  const elapsed = ((new Date().getTime() - startTime) / 1000).toFixed(2);
  const output = [
    padRight(`${scientificNotation(n)}`, 10),
    padRight(`${elapsed}s`, 8),
    'heap:',
    chalk.bold(`${hms(hu)}`),
    fmtDiff(hu, startHu, 12),
    'total:',
    `${hms(ht)}`,
    fmtDiff(ht, startHt, 12),
  ];

  if (windowSize.width >= 120) {
    output.concat(['rss:', `${hms(rss)}`, fmtDiff(rss, startRss, 12)]);
  }

  console.log(output.join(' '));
};

module.exports = { humanMemorySize, memLog };
