const _ = require('lodash');
const { resolve } = require('path');
const { readdir } = require('fs').promises;

const { memLog } = require('./memory');

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

const strToBool = (string) => {
  const areTrue = ['yes', 'true', true, 'y', 1, '1'];

  if (_.indexOf(areTrue, string.toLowerCase()) > -1) {
    return true;
  }

  return false;
};

const getFiles = async (dir) => {
  const dirEntries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirEntries.map((dirEnt) => {
      const path = resolve(dir, dirEnt.name);
      return dirEnt.isDirectory() ? getFiles(path) : path;
    }),
  );
  return Array.prototype.concat(...files);
};

module.exports = {
  getFiles,
  strToBool,
  swap,
  increment,
};
