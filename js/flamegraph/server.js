const simples = require('simples');
const { MongoClient } = require('mongodb');
const assert = require('assert');

const port = process.env.PORT || 8080;
const mongoUri = 'mongodb://localhost:27017';

MongoClient.connect(mongoUri, connectClient);

function connectClient(err, client) {
  assert.ifError(err);

  const db = client.db('skillshop');
  const collection = db.collection('carts');

  const server = simples(port);

  server.get('/carts/:id', function get(conn) {
    const cart = parseInt(conn.params.id);

    collection.find({ cart }).toArray((err, results) => {
      assert.ifError(err);

      const total = results.reduce((a, e) => a += e.price * e.quantity, 0);

      conn.send({ total });
    });
  });
}
