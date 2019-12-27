const padLeft = (input, len) => {
  const str = input && input.toString() ? input.toString() : '';
  return len > str.length ? new Array(len - str.length + 1).join(' ') + str : str;
};

const padRight = (input, len) => {
  const str = input && input.toString() ? input.toString() : '';
  return len > str.length ? str + new Array(len - str.length + 1).join(' ') : str;
};

module.exports = { padLeft, padRight };
