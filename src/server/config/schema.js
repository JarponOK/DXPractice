const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const clientsSchema = mongoose.Schema({
  _id: {
    type: ObjectId,
    default: new ObjectId()
  },
  name: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  birthday: Date,
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
});

const schedulerScheme = mongoose.Schema({
  _id: {
    type: ObjectId,
    default: new ObjectId()
  },
  startDate: {
    type: Date,
    default: new Date()
  },
  endDate: {
    type: Date,
    default: new Date()
  },
  location: {
    type: String,
    default: ''
  },
  note: {
    type: String,
    default: ''
  },
  idTreatment: {
    type: ObjectId,
    ref: 'treatment'
  },
  idClient: {
    type: ObjectId,
    ref: 'clients'
  }
});

const complaintScheme = mongoose.Schema({
  _id: {
    type: ObjectId,
    default: new ObjectId()
  },
  complaints: [String],
  allergies: [String],
  preparations: [String],
  notes: [
    {
      text: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  documents: [
    {
      name: String,
      URL: String
    }
  ],
  idClient: {
    type: ObjectId,
    ref: 'clients'
  }
});

const treatmentScheme = mongoose.Schema({
  _id: ObjectId,
  typeName: String,
  listProcedure: [
    {
      name: String,
      cost: Number,
      idProcedure: ObjectId
    }
  ]
});

const analyticsSchema = mongoose.Schema({
  _id: ObjectId,
  typeDate: String,
  list: [{
    name: String,
    num: Number
  }]
});

const Clients = mongoose.model('clients', clientsSchema);
const Schedulers = mongoose.model('schedulers', schedulerScheme);
const Complaints = mongoose.model('complaints', complaintScheme);
const Treatments = mongoose.model('treatment', treatmentScheme);
const AnalyticsNew = mongoose.model('analyticsNew', analyticsSchema);
// const AnalyticsVisit = mongoose.model('analyticsVisit', analyticsSchema);
// const AnalyticsHospital = mongoose.model('analyticsHospital', analyticsSchema);

module.exports = {
  Clients,
  Schedulers,
  Complaints,
  Treatments,
  AnalyticsNew,
  // AnalyticsHospital,
  // AnalyticsVisit,
  ObjectId
};
