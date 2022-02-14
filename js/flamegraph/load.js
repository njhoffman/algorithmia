// load.js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let count = 0;
const max = 10000;

MongoClient.connect(url, (err, client) => {
  if (err) { throw err };
  const db = client.db('skillshop');
  const collection = db.collection('carts');
  function insert(err) {
    if (err) throw err;

    if (count++ === max) {
      return client.close();
    }

    collection.insert({
      cart: parseInt(Math.random() * 100),
      quantity: parseInt(Math.random() * 10) + 1,
      price: Math.random() * 1000,
    }, insert);
  }

  insert();
});


process.on('uncaughtException', (ex) => {
  console.error(ex);
});
