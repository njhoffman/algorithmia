const sqlite3 = require('sqlite3').verbose();

const initDb = (config) =>
  new Promise(((resolve, reject) => {
    // :memory:
    const db = new sqlite3.Database(config.dbFile);

    const createSessions = [
      'CREATE TABLE IF NOT EXISTS "sessions" (',
      'id integer primary key autoincrement,',
      'language text,',
      'set_name text,',
      'missed int,',
      'correct int,',
      'start_time int,',
      'duration int);'
    ].join('');

    const createProblems = [
      'CREATE TABLE IF NOT EXISTS "problems" (',
      'id integer primary key autoincrement,',
      'session_id int references sessions (id),',
      'category text,',
      'name text,',
      'start_time int,',
      'duration int);',
    ].join('')

    const createQuestions = [
      'CREATE TABLE IF NOT EXISTS "questions" (',
      'id integer primary key autoincrement,',
      'session_id int references sessions (id),',
      'category text,',
      'name text,',
      'start_time int,',
      'duration int);',
    ].join('')

    db.on('profile', (query, duration) => {
      console.log(duration, query)
    })

    db.serialize(() => {
      db.run(createSessions);
      db.run(createProblems);
      db.run(createQuestions);
      resolve(db);
    });
  }));

const emptyDb = (config) => {
  db.run('TRUNCATE TABLE sessions');
  db.run('TRUNCATE TABLE problems')
  db.run('TRUNCATE TABLE questions')
}

const startSession = (db, { set_name, language }) =>
  new Promise((resolve, reject) => {
    const res = db.run(
      "INSERT INTO sessions(language, set_name, start_time) VALUES (?,?,?)",
      language,
      set_name,
      new Date().getTime()
    );
    resolve(res);
  });

module.exports = { initDb, startSession }
