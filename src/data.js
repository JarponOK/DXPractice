export const dataClient = [{
  name: 'Deric',
  lastname: 'Lawson',
  phone: '765-052-5230',
  birthday: '1983-04-19T20:00:00.000+00:00',
  dateApt: '2019-05-24T02:09:00.000+00:00'
}, {
  name: 'Eric',
  lastname: 'Garis',
  phone: '765-352-5430',
  birthday: '1983-05-28T20:00:00.000+00:00',
  dateApt: '2019-04-12T02:09:00.000+00:00'
}];

export const dataSheduler = [{
  name: 'Deric',
  lastname: 'Lawson',
  phone: '765-052-5230',
  start_time: '2019-05-03T09:00:00.000+00:00',
  end_time: '2019-05-03T11:00:00.000+00:00',
  operation: 'Cosmetic Composite resin restoration',
  location: 'Room 24',
  note: '',
}, {
  name: 'Eric',
  lastname: 'Garis',
  phone: '765-352-5430',
  start_time: '2019-05-04T02:12:00.000+00:00',
  end_time: '2019-05-04T21:13:00.000+00:00',
  operation: 'Cosmetic Composite resin restoration',
  location: 'Room 26',
  note: '',
}];

export const dataTreatment = [{
  diagnosis: [{
    operation: 'Blood test',
    cost: '25'
  }, {
    operation: 'Bitewing X-Ray',
    cost: '0'
  }],
  restoration: [{
    operation: 'Dental dam',
    cost: '15'
  }, {
    operation: 'Sealant',
    cost: '15'
  }],
  root_canal: [{
    operation: 'Direct pulp capping',
    cost: '50'
  }, {
    operation: 'Root canal re-treatment (molar)',
    cost: '250'
  }],
  hygiene: [{
    operation: 'Gum grafting',
    cost: '300'
  }, {
    operation: 'Operculectomy',
    cost: '25'
  }],
  whitening: [{
    operation: 'Internal bleaching',
    cost: '100'
  }, {
    operation: 'At-home whitening kit (Zoom)',
    cost: '100'
  }],
  prosthetics: [{
    operation: 'Composite onlay',
    cost: '100'
  }, {
    operation: 'Crown removal',
    cost: '15'
  }],
  implantation: [{
    operation: 'Bone grafting',
    cost: '600'
  }, {
    operation: 'Sinus augmentation (Closed)',
    cost: '300'
  }],
  orthodontics: [{
    operation: 'Functional appliance',
    cost: '300'
  }, {
    operation: 'Invisalign',
    cost: '4500'
  }],
  surgery: [{
    operation: 'Permanent tooth extraction',
    cost: '80'
  }, {
    operation: 'Gum contouring surgery',
    cost: '150'
  }]
}];

export const dataTreatmentHistory = [{
  start_time: '2019-06-05T12:00:00.000+00:00',
  end_time: '2019-06-05T13:00:00.000+00:00',
  nameTreatment: 'Consult',
  cost: '0'
}, {
  start_time: '2019-06-05T13:00:00.000+00:00',
  end_time: '2019-06-05T14:00:00.000+00:00',
  nameTreatment: 'Tooth gap filing',
  cost: '50'
}, {
  start_time: '2019-07-24T09:00:00.000+00:00',
  end_time: '2019-07-24T11:00:00.000+00:00',
  nameTreatment: 'Gum contouring surgery',
  cost: '100'
}];
