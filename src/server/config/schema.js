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
  startDate: Date,
  endDate: Date,
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

const Clients = mongoose.model('clients', clientsSchema);
const Schedulers = mongoose.model('schedulers', schedulerScheme);
const Complaints = mongoose.model('complaints', complaintScheme);

module.exports = {
  Clients,
  Schedulers,
  Complaints,
  ObjectId
};
