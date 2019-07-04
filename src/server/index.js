const dataServer = require('../data.js');

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const mongodb = require('./config/db.js');

const app = express();

let db;
MongoClient.connect(mongodb.url, (err, client) => {
  if (err) return console.log(err);
  db = client.db('DXPractice');
  app.listen(8080, () => {
    console.log('listen port 8080');
  });
});

app.post('/api/clients', (req, res) => {
  res.send(dataServer.dataClients);
});

app.get('/api/clients/:id', (req, res) => {
  // const idClient = req.params.id;
  res.send(dataServer.dataClientsId);
});

app.get('/api/scheduler/:fistDay:lastDay', (req, res) => {
  // const firstDay = req.params.firstDay;
  // const lastDay = req.params.lastDay;
  res.send(dataServer.dataScheduler);
});

app.post('/api/treatment', (req, res) => {
  res.send(dataServer.dataTreatment);
});

app.get('/api/treatment/:id', (req, res) => {
  res.send(dataServer.dataTreatmentHistory);
});

app.get('/api/complaint/:id', (req, res) => {
  // const idClient = req.params.id;
  res.send(dataServer.dataComplaints);
});

app.get('/api/doctors/:id', (req, res) => {
  // const idDoctor = req.params.id;
  res.send(dataServer.dataDoctor);
});

app.post('/api/analytics/age', (req, res) => {
  res.send(dataServer.dataAnalyticsAge);
});

app.get('/api/analytics/new/:type', (req, res) => {
  res.send(dataServer.dataAnalyticsNewYears);
});
