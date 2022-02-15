const PrettyError = require('pretty-error');
const pe = new PrettyError()

const problemSet = require('./problems.json')
const config = require('./config');
const { initDb, startSession } = require('./db');
const { initFiles } = require('./files');

const run = async args => {
  const language = 'js'

  // const db = await initDb(config)
  const dirs = initFiles(config, language, problemSet);
  console.log("DIRS", dirs)
  // const session_id = await startSession(db,
  //   { set_name: problemSet.name, language: 'js' }
  // )
  // watchFiles
  // runFile
  // db.close();

}

run(process.argv.slice(2));

/* eslint-disable no-console */
process.on('unhandledRejection', err => {
  console.log(pe.render(err));
  process.exit(1);
});

process.on('uncaughtException', err => {
  console.log(pe.render(err));
  process.exit(1);
});
