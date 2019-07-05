module.exports = {
  dataClients: [{
    _id: '5d1b570e1490015f56fa1f51',
    name: 'Derick',
    lastname: 'Lawson',
    birthday: '1983-04-19T20:20:00.000+00:00',
    phone: '765-052-5230',
    lastAppt: '2003-03-02T21:00:00.000+00:00'
  }, {
    _id: '5d1b570e1490015f56fa1f52',
    name: 'Eric',
    lastname: 'Garis',
    birthday: '1992-05-28T00:00:30.000+00:00',
    phone: '765-352-5430',
    lastAppt: '2019-05-20T20:00:00.000+00:00'
  }],

  dataClientsId: [{
    name: 'Derick',
    lastname: 'Lawson',
    birthday: '1983/3/19',
    phone: '765-052-5230',
    email: 'garrison@email.com',
    city: 'Whitewall',
    address: '7655 Newport'
  }],

  dataScheduler: [{
    startDate: '2019-05-03T09:00:00.000+00:00',
    endDate: '2019-05-03T11:00:00.000+00:00',
    name: 'Derick',
    lastname: 'Lawson',
    phone: '765-052-5230',
    operation: 'Blood test',
    note: 'Hello, Note!',
    idClient: '5d1b570e1490015f56fa1f51'
  }, {
    startDate: '2019-05-04T10:00:00.000+00:00',
    endDate: '2019-05-04T11:10:00.000+00:00',
    name: 'Eric',
    lastname: 'Garis',
    phone: '765-352-5430',
    operation: 'Invisalign',
    note: 'Hello, Note!',
    idClient: '5d1b570e1490015f56fa1f52'
  }],

  dataTreatment: [{
    typeName: 'diagnosis',
    listProcedure: [{
      name: 'Blood test',
      cost: 25,
      idProcedure: 'procedureD1'
    }, {
      name: 'Bitewing X-Ray',
      cost: 0,
      idProcedure: 'procedureD2'
    }],
  }, {
    typeName: 'restoration',
    listProcedure: [{
      name: 'Dental dam',
      cost: 15,
      idProcedure: 'procedureR1'
    }, {
      name: 'Sealant',
      cost: 15,
      idProcedure: 'procedureR2'
    }],
  }, {
    typeName: 'root_canal',
    listProcedure: [{
      name: 'Direct pulp capping',
      cost: 50,
      idProcedure: 'procedureRC1'
    }, {
      name: 'Root canal re-treatment (molar)',
      cost: 250,
      idProcedure: 'procedureRC2'
    }],
  }, {
    typeName: 'hygiene',
    listProcedure: [{
      name: 'Gum grafting',
      cost: 300,
      idProcedure: 'procedureH1'
    }, {
      name: 'Operculectomy',
      cost: 25,
      idProcedure: 'procedureH1'
    }],
  }, {
    typeName: 'whitening',
    listProcedure: [{
      name: 'Internal bleaching',
      cost: 100,
      idProcedure: 'procedureW1'
    }, {
      name: 'At-home whitening kit (Zoom)',
      cost: 100,
      idProcedure: 'procedureW2'
    }],
  }, {
    typeName: 'prosthetics',
    listProcedure: [{
      name: 'Composite onlay',
      cost: 100,
      idProcedure: 'procedureP1'
    }, {
      name: 'Crown removal',
      cost: 15,
      idProcedure: 'procedureP2'
    }],
  }, {
    typeName: 'implantation',
    listProcedure: [{
      name: 'Bone grafting',
      cost: 600,
      idProcedure: 'procedureI1'
    }, {
      name: 'Sinus augmentation (Closed)',
      cost: 300,
      idProcedure: 'procedureI2'
    }],
  }, {
    typeName: 'orthodontics',
    listProcedure: [{
      name: 'Functional appliance',
      cost: 300,
      idProcedure: 'procedureO1'
    }, {
      name: 'Invisalign',
      cost: 4500,
      idProcedure: 'procedureO2'
    }],
  }, {
    typeName: 'surgery',
    listProcedure: [{
      name: 'Permanent tooth extraction',
      cost: 80,
      idProcedure: 'procedureS1'
    }, {
      name: 'Gum contouring surgery',
      cost: 150,
      idProcedure: 'procedureS2'
    }]
  }],

  dataTreatmentHistory: [{
    startDate: '2019-06-05T12:00:00.000+00:00',
    endDate: '2019-06-05T13:00:00.000+00:00',
    idProcedure: 'procedureS2'
  }, {
    startDate: '2019-06-05T13:00:00.000+00:00',
    endDate: '2019-06-05T14:00:00.000+00:00',
    idProcedure: 'procedureO2'
  }, {
    startDate: '2019-07-24T09:00:00.000+00:00',
    endDate: '2019-07-24T11:00:00.000+00:00',
    idProcedure: 'procedureI1'
  }],

  dataComplaints: [{
    listComplaints: ['Complaints 1', 'Complaints 2'],
    listAllergies: ['Not allergies'],
    listPreparations: ['Preparation'],
    listNotes: [{
      textNotes: 'Live',
      dateNotes: '2019-05-18T20:00:00.000+00:00'
    }, {
      textNotes: 'Died',
      dateNotes: '2019-05-19T20:00:00.000+00:00'
    }],
    listDocuments: [{
      nameDocuments: 'file1.pdf',
      URLDocuments: 'C:/users/desktop/fil1.pdf'
    }, {
      nameDocuments: 'file2.pdf',
      URLDocuments: 'C:/users/desktop/fil2.pdf'
    }]
  }],

  dataDoctor: [{
    _id: 'doctor1',
    name: 'Jack',
    lastname: 'Gardner',
    birthday: '1983-06-23T00:00:00.000+00:00',
    phone: '765-052-5230',
    email: 'gardner@email.com',
    city: 'Whitter',
    address: '6755 Newline Ave'
  }],

  dataAnalyticsAge: [{
    ageJunior: 30,
    ageMiddle: 83,
    ageSenior: 24
  }],

  dataAnalyticsNewYears: [{
    listMonth: [{
      nameMonth: 'Sep',
      numClients: 30
    }, {
      nameMonth: 'Oct',
      numClients: 42
    }]
  }],

  dataAnalyticsNewMonth: [{
    listWeek: [{
      nameWeek: 'Sat1',
      numClients: 12
    }, {
      nameMonth: 'Sat2',
      numClients: 6
    }]
  }],

  dataAnalyticsNewWeek: [{
    listWeek: [{
      nameWeek: 'Sat',
      numClients: 5
    }, {
      nameMonth: 'Mon',
      numClients: 7
    }]
  }],

  dataAnalyticsHospitalYears: [{
    listMonth: [{
      nameMonth: 'Sep',
      numClients: 30
    }, {
      nameMonth: 'Oct',
      numClients: 42
    }]
  }],

  dataAnalyticsHospitalMonth: [{
    listWeek: [{
      nameWeek: 'Sat1',
      numClients: 12
    }, {
      nameMonth: 'Sat2',
      numClients: 6
    }]
  }],

  dataAnalyticsHospitalWeek: [{
    listWeek: [{
      nameWeek: 'Sat',
      numClients: 5
    }, {
      nameMonth: 'Mon',
      numClients: 7
    }]
  }],

  dataAnalyticsVisitYears: [{
    listMonth: [{
      nameMonth: 'Sep',
      numClients: 30
    }, {
      nameMonth: 'Oct',
      numClients: 42
    }]
  }],

  dataAnalyticsVisitMonth: [{
    listWeek: [{
      nameWeek: 'Sat1',
      numClients: 12
    }, {
      nameMonth: 'Sat2',
      numClients: 6
    }]
  }],

  dataAnalyticsVisitWeek: [{
    listWeek: [{
      nameWeek: 'Sat',
      numClients: 5
    }, {
      nameMonth: 'Mon',
      numClients: 7
    }]
  }],
};
