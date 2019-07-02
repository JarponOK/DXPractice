const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const mongodb = require('./config/db.js');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

let db;
MongoClient.connect(mongodb.url, (err, client) => {
  if (err) return console.log(err);
  db = client.db('DXPractice');
  app.listen(8080, () => {
    console.log('listen port 8080');
  });
});


app.post('/api/patient', (req, res) => {
  const details = {
    name: 1, lastname: 1, phone: 1
  };
  
  db.collection('patient').find({}, details).toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});
