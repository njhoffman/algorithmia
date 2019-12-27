const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const columnify = require('columnify');

const { humanMemorySize, scientificNotation, numCommas, memLog } = require('./utils');

const init = ({ fileName, logInterval, count = 1000, ...extra }) => {
  const filePath = path.join(__dirname, '../..', 'data', `${fileName}.txt`);
  const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const data = _.map(`${fileData}`.split('\n').slice(0, count), _.toNumber);

  return {
    data,
    count,
    config: {
      logInterval,
      n: 1,
      startMemory: process.memoryUsage(),
      startTime: new Date().getTime(),
    },
    ...extra,
  };
};
/* eslint-enable no-param-reassign */
const runSets = (settings) => {
  const fmt = (val) => chalk.bold(numCommas(val.length));
  const fmtBigO = (label, val) => `${scientificNotation(val)} ${label}`;

  const { logInterval, runs } = settings;
  const totals = [];

  runs.forEach((run) => {
    const { config, data, func, name, bigO, count } = init({ ...run, logInterval });

    const startTime = new Date().getTime();
    // const startMemory = process.memoryUsage();
    const { best, average, worst } = bigO;

    const bigOTotal = {
      'O(n) Best': fmtBigO(best[0], best[1](count)),
      'O(n) Average': fmtBigO(average[0], average[1](count)),
      'O(n) Worst': fmtBigO(worst[0], worst[1](count)),
    };

    console.log('----------------------------------------\n', `Running ${name} on ${fmt(data)} items\n`);
    const results = func(data.slice(), config);
    memLog(config);

    const endMemory = process.memoryUsage();

    totals.push({
      name,
      // count: numCommas(count),
      count: scientificNotation(count),
      time: new Date().getTime() - startTime,
      memory: humanMemorySize(endMemory.heapUsed),
      'O(n)': scientificNotation(config.n),
      ...bigOTotal,
    });

    console.log(`\nDone with ${name} (n => ${numCommas(config.n)}) on`, `${fmt(results)} items\n`);
  });

  const columnifyOptions = {
    minWidth: 12,
    config: {
      // headingTransform / dataTransform
      name: {
        minWidth: 15,
      },
      count: {
        // minWidth: 12,
      },
      time: {
        // minWidth: 8,
        dataTransform: (time) => `${(time / 1000).toFixed(2)}s`,
      },
      memory: {
        // minWidth: 10,
      },
      'O(n)': {
        minWidth: 12,
      },
      'O(n) Best': {
        minWidth: 20,
      },
      'O(n) Avg': {
        minWidth: 20,
      },
      'O(n) Worst': {
        minWidth: 20,
      },
    },
    maxLineWidth: 'auto',
  };

  console.log('\n', columnify(totals, columnifyOptions), '\n\n');
};

module.exports = {
  runSets,
};
