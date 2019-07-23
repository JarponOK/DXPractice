const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
// eslint-disable-next-line object-curly-newline
const { Clients, Schedulers, Complaints, Treatments, ObjectId } = require('./config/schema');
const mongodb = require('./config/db.js');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PATCH, DELETE, POST');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db;
mongoose.connect(mongodb.url, (err) => {
  if (err) throw err;

  MongoClient.connect(mongodb.url, (error, client) => {
    if (error) return console.log(error);
    db = client.db('DXPractice');
    app.listen(8080, () => {
      console.log('Successfully connected');
    });
    return 0;
  });
});

app.get('/api/clients', (req, res) => {
  Clients
    .aggregate([
      {
        $lookup: {
          from: 'schedulers',
          localField: '_id',
          foreignField: 'idClient',
          as: 'lastAppt'
        }
      },
      {
        $unwind: '$lastAppt'
      },
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          lastname: { $first: '$lastname' },
          birthday: { $first: '$birthday' },
          phone: { $first: '$phone' },
          lastAppt: { $push: '$lastAppt.startDate' }
        }
      }
    ])
    .exec((err, result) => {
      if (err) res.status(400).send(err);

      result.forEach((element) => { /* eslint-disable */
        element.lastAppt = element.lastAppt.map(date => (date < new Date() ? date : '')).sort()[0];
      });

      res.status(200).send(result);
    });
});

app.get('/api/clients/:id', (req, res) => {
  const idClient = ObjectId(req.params.id);

  Clients.aggregate([
    {
      $match: {
        _id: idClient
      }
    }, {
      $lookup: {
        from: 'schedulers',
        localField: '_id',
        foreignField: 'idClient',
        as: 'historyTreatment'
      }
    },
    {
      $lookup: {
        from: 'complaints',
        localField: '_id',
        foreignField: 'idClient',
        as: 'complaints'
      }
    },
    {
      $unwind: '$complaints'
    },
    {
      $project: {
        _id: 0,
        __v: 0,
        'historyTreatment._id': 0,
        'historyTreatment.__v': 0,
        'historyTreatment.location': 0,
        'historyTreatment.note': 0,
        'historyTreatment.idClient': 0,
        'complaints._id': 0,
        'complaints.__v': 0,
        'complaints.idClient': 0,
      }
    }
  ])
    .exec((err, result) => {
      if (err) res.status(400).send(err);

      res.status(200).send(result[0]);
    });
});

app.get('/api/scheduler/:firstDay&:lastDay', (req, res) => {
  const { firstDay, lastDay } = req.params;

  const first = new Date(firstDay);
  const last = new Date(lastDay);

  Schedulers.aggregate([
    {
      $match: {
        startDate: { $gte: first },
        endDate: { $lte: last }
      }
    },
    {
      $lookup: {
        from: 'clients',
        localField: 'idClient',
        foreignField: '_id',
        as: 'clients'
      }
    },
    {
      $unwind: '$clients'
    },
    {
      $lookup: {
        from: 'treatment',
        localField: 'idTreatment',
        foreignField: 'listProcedure.idProcedure',
        as: 'treatment'
      }
    },
    {
      $unwind: '$treatment'
    },
    {
      $group: {
        _id: '$_id',
        startDate: { $first: '$startDate' },
        endDate: { $first: '$endDate' },
        location: { $first: '$location' },
        note: { $first: '$note' },
        idClient: { $first: '$idClient' },
        idTreatment: { $first: '$idTreatment' },
        treatment: { $first: '$treatment.listProcedure' },
        name: { $first: '$clients.name' },
        lastname: { $first: '$clients.lastname' },
        phone: { $first: '$clients.phone' },
      }
    }
  ]).exec((err, result) => {
    if (err) res.status(400).send(err);

    result.forEach((element) => {
      element.operation = element.treatment.map(data => {
        if (toString(data.idProcedure) === toString(element.idTreatment)) return data.name;
      }).sort()[0];

      delete element.treatment;
      delete element.idTreatment;
    });

    res.status(200).send(result);
  });
});

app.get('/api/treatment', (req, res) => {
  Treatments
    .find({},
      {
        $projection: {
          _id: 0
        }
      })
    .exec((err, result) => {
      if (err) res.status(400).send(err);

      res.status(200).send(result);
    })
});

app.get('/api/doctors', (req, res) => {
  const auth = req.body;

  if (auth.login === 'doctor' && auth.password === 'doctor') {
    details = {
      projection: {
        _id: 0
      }
    };

    db.collection('doctors').find({}, details).toArray((err, result) => {
      if (err) return res.send({ error: err });

      return res.send(result[0]);
    });
  } else {
    res.send({ error: 'Error auth' });
  }
});

app.get('/api/analytics/age', (req, res) => {
  const details = {
    projection: {
      _id: 0
    }
  };

  db.collection('analyticsAge').find({}, details).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result);
  });
});

app.get('/api/analytics/new/:type', (req, res) => {
  const { type } = req.params;

  const details = {
    projection: {
      _id: 0,
      type: 0
    }
  };

  const finding = {
    type: type
  };

  db.collection('analyticsNew').find(finding, details).limit(1).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result[0]);
  });
});

app.get('/api/analytics/hospital/:type', (req, res) => {
  const { type } = req.params;

  const details = {
    projection: {
      _id: 0,
      type: 0
    }
  };

  const finding = {
    type: type
  };

  db.collection('analyticsHospital').find(finding, details).limit(1).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result[0]);
  });
});

app.get('/api/analytics/visit/:type', (req, res) => {
  const { type } = req.params;

  const details = {
    projection: {
      _id: 0,
      type: 0
    }
  };

  const finding = {
    type: type
  };

  db.collection('analyticsVisit').find(finding, details).limit(1).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result[0]);
  });
});

app.get('/api/analytics/total', (req, res) => {
  const details = {
    projection: {
      _id: 0,
    }
  };

  db.collection('analyticsTotal').find({}, details).limit(1).toArray((err, result) => {
    if (err) return res.send({ error: err });

    return res.send(result[0]);
  });
});

app.post('/api/clients', (req, res) => {
  const { name, lastname, birthday, phone, email, city, address } = req.body;

  const client = new Clients({
    _id: new ObjectId(),
    name,
    lastname,
    birthday,
    phone,
    email,
    city,
    address,
  });

  client.save((err) => {
    if (err) res.status(400).send(err);

    let complaint = new Complaints({
      _id: new ObjectId,
      idClient: client._id
    });
    complaint.save((err) => {
      if (err) res.status(400).send(err);
    })

    let scheduler = new Schedulers({
      _id: new ObjectId,
      idClient: client._id
    });
    scheduler.save((err) => {
      if (err) res.status(400).send(err);
    })

    res.status(200).send({ type: 'OK' });
  });
});

app.post('/api/scheduler', (req, res) => {
  const { startDate, endDate, location, note, idTreatment, idClient } = req.body;

  let scheduler = new Schedulers({
    _id: new ObjectId(),
    startDate,
    endDate,
    location,
    note,
    idTreatment: ObjectId(idTreatment),
    idClient: ObjectId(idClient)
  });

  scheduler.save((err) => {
    if (err) res.status(400).send(err);

    res.status(200).send({ type: 'OK' });
  });
});

app.patch('/api/complaint', (req, res) => {
  id = req.body.idClient;
  delete req.body.idClient;

  const objUpdate = req.body;

  Complaints.findOneAndUpdate(
    { idClient: ObjectId(id) },
    objUpdate, (err) => {
      if (err) return res.status(400).send({ error: err });

      res.status(200).send({ type: 'OK' });
    })
});

app.patch('/api/clients', (req, res) => {
  id = req.body._id
  delete req.body._id;

  const objUpdate = req.body;

  Clients.findOneAndUpdate({ _id: ObjectId(id) }, objUpdate, (err) => {
    if (err) return res.status(400).send({ error: err });

    res.status(200).send({ type: 'OK' });
  })
});

app.patch('/api/scheduler', (req, res) => {
  id = req.body._id
  delete req.body._id;

  const objUpdate = req.body;

  Schedulers.findOneAndUpdate(
    { _id: ObjectId(id) },
    objUpdate, (err) => {
      if (err) return res.status(400).send({ error: err });

      res.status(200).send({ type: 'OK' });
    })
});

app.delete('/api/clients', (req, res) => {
  const id = req.body.id;

  if (id !== undefined) {
    Clients.deleteOne({ _id: id }, (err) => {
      if (err) res.status(400).send(err);

      Schedulers.deleteMany({ idClient: id }, (error) => {
        if (error) res.status(400).send(error);
      })

      Complaints.deleteMany({ idClient: id }, (error) => {
        if (error) res.status(400).send(error);
      })

      res.send({ type: 'OK' });
    })
  }
});

app.delete('/api/scheduler/', (req, res) => {
  const { id } = req.body;

  Schedulers.deleteOne({ _id: id }, (err) => {
    if (err) res.status(400).send(err);

    res.send({ type: 'OK' });
  })
});
