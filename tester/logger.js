const config = require('./config')
const isDebug = config.debug || process.env.DEBUG

const logger = {
  log: (...msg) => {
    console.log(...msg);
  },
  debug: (...msg) => {
    if (isDebug) {
      console.log(...msg)
    }
  }
}

module.exports = logger;
