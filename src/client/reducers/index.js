
export const Patients_table= [
  {
    "_id": string,
    "name": string,
    "lastname": string,
    "birthday": date,
    "phone": string,
    "lastAppt": date
  }, {
    "_id": string,
    "name": string,
    "lastname": string,
    "birthday": date,
    "phone": string,
    "lastAppt": date
  }
]

export const Client_by_id=[
  {
    "name": string,
    "lastname": string,
    "birthday": date,
    "phone": string,
    "email": string,
    "city": string,
    "address": string,
    "historyTreatment": [{
      "startDate": date,
      "endDate": date,
      "idProcedure": string
    },{
      "startDate": date,
      "endDate": date,
      "idProcedure": string
    }],
    "complaints": {
      "listComplaints": [
        string, string
      ],
      "listAllergies": [
        string, string
      ],
      "listPreparations": [
        string, string
      ],
      "listNotes": [{
        "textNotes": string,
        "dateNotes": date
      }, {
        "textNotes": string,
        "dateNotes": date
      }],
      "listDocuments": [{
        "nameDocuments": string,
        "URLDocuments": string
      }, {
        "nameDocuments": string,
        "URLDocuments": string
      }]
    }
  } 
]
export const Sheaduler=[
  {
    "startDate": date,
    "endDate": date,
    "name": string,
    "lastname": string,
    "phone": string,
    "operation": string,
    "location": string,
    "note": string,
    "idClient": string
  }, {
    "startDate": date,
    "endDate": date,
    "name": string,
    "lastname": string,
    "phone": string,
    "operation": string,
    "location": string,
    "note": string,
    "idClient": string
  }
]
export const List_Treatment=[
  {
    "nameType": string,
    "listOperation": [{
      "name": string,
      "cost": integer,
      "idProcedure": string
    }, {
      "name": string,
      "cost":integer,
      "idProcedure": string
    }]
  }, {
    "nameType": string,
    "listOperation": [{
      "name": string,
      "cost": integer,
      "idProcedure": string
    }, {
      "name": string,
      "cost": integer,
      "idProcedure": string
    }]
  }
]
  
