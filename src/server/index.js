const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const dataServer = require('../data.js');
const mongodb = require('./config/db.js');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));

let db;
MongoClient.connect(mongodb.url, (err, client) => {
  if (err) return console.log(err);
  db = client.db('DXPractice');
  app.listen(8080, () => {
    console.log('listen port 8080');
  });
  return 0;
});

// OK
app.get('/api/clients', (req, res) => {
  const details = {
    projection: {
      _id: 1,
      name: 1,
      lastname: 1,
      birthday: 1,
      phone: 1,
      historyTreatment: 1
    }
  };

  db.collection('clients').find({}, details).toArray((err, result) => {
    if (err) return res.send({ error: err });

    result.forEach((element) => { /* eslint-disable */
      element.lastAppt = element.historyTreatment.map(date => (date.startDate < new Date()) ? date.startDate : '').sort()[0];
      delete element.historyTreatment;
    });

    return res.send(result);
  });
});

// OK
app.get('/api/clients/:id', (req, res) => {
  const idClient = req.params.id;

  const finding = {
    _id: new ObjectId(idClient)
  };

  const details = {
    projection: {
      _id: 0,
      // name: 1,
      // lastname: 1,
      // birthday: 1,
      // phone: 1,
      // email: 1,
      // city: 1,
      // address: 1,
    }
  };

  db.collection('clients').find(finding, details).limit(1).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result);
  });
});

app.get('/api/scheduler', (req, res) => {
  const { firstDay, lastDay } = req.body;

  console.log(req.body);

  res.send(dataServer.dataScheduler);
});

// OK
app.get('/api/treatment', (req, res) => {
  const details = {
    projection: {
      _id: 0,
    }
  };

  db.collection('treatment').find({}, details).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result);
  });
});

// OK
app.post('/api/doctors', (req, res) => {
  const auth = req.body;
  if (auth.login === 'doctor' && auth.password === 'doctor') {
    details = {
      projection: {
        _id: 0
      }
    }

    db.collection('doctors').find({}, details).toArray((err, result) => {
      if (err) return res.send({ error: err });

      return res.send(result);
    });
  } else {
    res.send({ error: 'Error auth' });
  }
});

// OK
app.get('/api/analytics/age', (req, res) => {
  const details = {
    projection: {
      _id: 0
    }
  }

  db.collection('analyticsAge').find({}, details).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result);
  });
});

// Need month
app.get('/api/analytics/new/', (req, res) => {
  const { type } = req.body;

  const details = {
    projection: {
      _id: 0,
      type: 0
    }
  };

  const finding = {
    type: type
  };

  if (type === 'years') {
    db.collection('analyticsNew').find(finding, details).limit(1).toArray((err, result) => {
      if (err) return res.send({ error: err });

      return res.send(result);
    });
  } else if (type === 'month') {
    res.send(dataServer.dataAnalyticsNewMonth);
  } else if (type === 'week') {
    db.collection('analyticsNew').find(finding, details).limit(1).toArray((err, result) => {
      if (err) return res.send({ error: err });

      return res.send(result);
    });
  } else {
    res.send({ error: 'Error type' });
  }
});

app.get('/api/analytics/hospital/', (req, res) => {
  const { type } = req.body;

  const details = {
    projection: {
      _id: 0,
      type: 0
    }
  };

  const finding = {
    type: type
  };

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

app.get('/api/analytics/visit/', (req, res) => {
  const { type } = req.body;

  const details = {
    projection: {
      _id: 0,
      type: 0
    }
  };

  const finding = {
    type: type
  };
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
