
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const dataServer = require('../data.js');
const mongodb = require('./config/db.js');

const app = express();

let db;
MongoClient.connect(mongodb.url, (err, client) => {
  if (err) return console.log(err);
  db = client.db('DXPractice');
  app.listen(8080, () => {
    console.log('listen port 8080');
  });
  return 0;
});

app.post('/api/clients', (req, res) => {
  res.send(dataServer.dataClients);
});

app.get('/api/clients/:id', (req, res) => {
  // const idClient = req.params.id;
  res.send(dataServer.dataClientsId);
});

app.get('/api/scheduler/:firstDay&:lastDay', (req, res) => {
  const { firstDay, lastDay } = req.params;
  console.log(firstDay);
  console.log(lastDay);

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
  const { type } = req.params;
  if (type === 'years') {
    res.send(dataServer.dataAnalyticsNewYears);
  } else if (type === 'month') {
    res.send(dataServer.dataAnalyticsNewMonth);
  } else if (type === 'week') {
    res.send(dataServer.dataAnalyticsNewWeek);
  } else {
    res.send('Error type');
  }
});

app.get('/api/analytics/hospital/:type', (req, res) => {
  const { type } = req.params;
  if (type === 'years') {
    res.send(dataServer.dataAnalyticsHospitalYears);
  } else if (type === 'month') {
    res.send(dataServer.dataAnalyticsHospitalMonth);
  } else if (type === 'week') {
    res.send(dataServer.dataAnalyticsHospitalWeek);
  } else {
    res.send('Error type');
  }
});

app.get('/api/analytics/visit/:type', (req, res) => {
  const { type } = req.params;
  if (type === 'years') {
    res.send(dataServer.dataAnalyticsVisitYears);
  } else if (type === 'month') {
    res.send(dataServer.dataAnalyticsVisitMonth);
  } else if (type === 'week') {
    res.send(dataServer.dataAnalyticsVisitWeek);
  } else {
    res.send('Error type');
  }
});
