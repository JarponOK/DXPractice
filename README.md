# API 
## Return list clients for "Patients" table
## Request
* ## Method
```sh
POST
```
* ## URL
```sh
/api/clients
```
## Response
| Parameter | Type   |
|-----------|--------|
| _id       | string |
| name      | string |
| lastname  | string |
| birthday  | date   |
| phone     | string |
## Response example
```sh
[
  {
    "_id": "5d1a1173755b345bbd34f009",
    "name": "Derick",
    "lastname": "Lawson",
    "birthday": "1983-04-19T20:20:00.000+00:00",
    "phone": "765-052-5230",
    "lastAppt": "2019-05-19T21:00:00.000+00:00"
  }, {
    " _id": "5d1b676921007f5f56c43e36",
    "name": "Eric",
    "lastname": "Garis",
    "birthday": "1992-05-28T00:00:30.000+00:00",
    "phone": "7765-352-5230",
    "lastAppt": "2019-03-22T21:00:00.000+00:00"
  }
]
```
#
## Return client by id
## Request
* ## Method
```sh
GET
```
* ## URL
```sh
/api/clients/:id
```
* ## URL Params
```sh
id = string
```
## Response
| Parameter | Type   |
|-----------|--------|
| _id       | string |
| name      | string |
| lastname  | string |
| birthday  | date   |
| phone     | string |
| email     | string |
| city      | string |
| address   | string |
## Response example
```sh
[
  {
    "_id": "5d1a1173755b345bbd34f009",
    "name": "Derick",
    "lastname": "Lawson",
    "birthday": "1983-04-19T20:20:00.000+00:00",
    "phone": "765-052-5230",
    "email": "harrington@email.com"
    "city": "Whitter",
    "address": "6755 Newline Ave"
  } 
]
```
#
## Return list scheduler
## Request
* ## Method
```sh
GET
```
* ## URL
```sh
/api/scheduler/:firstDay:lastDay
```
* ## URL Params
```sh
firstDay = integer
lastDay = integer
```
## Response
| Parameter | Type   |
|-----------|--------|
| start     | date   |
| end       | date   |
| name      | string |
| lastname  | string |
| phone     | string |
| operation | string |
| location  | string |
| note      | string |
| idClient  | string |
## Response example
```sh
[
  {
    "start": "2019-05-03T09:00:00.000+00:00",
    "end": "2019-05-19T11:00:00.000+00:00",
    "name": "Derick",
    "lastname": "Lawson",
    "phone": "765-052-5230",
    "operation": "Cosmetic Composite resin restoration",
    "location": "Room 24",
    "note": "",
    "idClient": "5d1a1173755b345bbd34f009"
  }, {
    "start": "2019-05-04T10:00:00.000+00:00",
    "end": "2019-05-19T12:00:00.000+00:00",
    "name": "Eric",
    "lastname": "Garis",
    "phone": "765-352-5430",
    "operation": "Cosmetic Composite resin restoration",
    "location": "Room 25",
    "note": "It's cool",
    "idClient": "5d1b676921007f5f56c43e36"
  }
]
```
#
## Return list treatment
## Request
* ## Method
```sh
 POST
```
* ## URL
```sh
/api/treatment
```
## Response
| Parameter     | Type     |
|---------------|----------|
| nameType      | string   |
| listProcedure | array ?? |
| name          | string   |
| cost          | integer  |
| idProcedure   | string   |
## Response example
```sh
[
  {
    "nameType": "Diagnosis",
    "listOperation": [{
      "name": "Blood test",
      "cost"; 25,
      "idProcedure": "5d1c8f83ba206d0170de5788"
    }, {
      "name": "Dental dam",
      "cost"; 15,
      "idProcedure": "5d1c8f83ba206d0170de5789"
    }]
  }, {
    "nameType": "Restoration",
    "listOperation": [{
      "name": "Dental dam",
      "cost"; 15,
      "idProcedure": "5d1c8f83ba206d0170de5790"
    }, {
      "name": "Sealant",
      "cost"; 15,
      "idProcedure": "5d1c8f83ba206d0170de5791"
    }]
  }
]
```
#
## Return history treatment client
## Request
* ## Method
```sh
GET
```
* ## URL
```sh
/api/treatment/:id
```
* ## URL Params
```sh
id = string
```
## Response
| Parameter   | Type   |
|-------------|--------|
| start_time  | date   |
| end_time    | date   |
| idProcedure | string |
## Response example
```sh
[
  {
    "start_time": "2019-05-19T12:00:00.000+00:00",
    "end_time": "2019-05-19T14:00:00.000+00:00",
    "idProcedure": "5d1c8f83ba206d0170de5788"
  } 
]
```
#
## Return complaints
## Request
* ## Method
```sh
GET
```
* ## URL
```sh
/api/complaints/:id
```
* ## URL Params
```sh
id = string
```
## Response
| Parameter        | Type        |
|------------------|-------------|
| listComplaints   | arrayString |
| listAllergies    | arraySting  |
| listPreparations | arraySting  |
| listNotes        | array ??    |
| textNotes        | string      |
| dateNotes        | date        |
| listDocuments    | array       |
| nameDocuments    | string      |
| URLDocuments     | string      |
## Response example
```sh
[
  {
    "listComplaints": [
      "Complaints 1", "Complaints 2"
    ],
    "listAllergies": [
      ""
    ],
    "listPreparations": [
      "Activated carbon"
    ],
    "listNotes": [{
      "textNotes": "Live",
      "dateNotes": "20019-05-17T20:20:00.000+00:00"
    }, {
      "textNotes": "Died",
      "dateNotes": "20019-05-19T20:20:00.000+00:00"
    }],
    "listDocuments": [{
      "nameDocuments": "Document1.pdf",
      "URLDocuments": "C:\desktop\Document1.pdf"
    }, {
      "nameDocuments": "Document2.pdf",
      "URLDocuments": "C:\desktop\Document2.pdf"
    }]
  }
]
```
#
## Return doctor by id
## Request
* ## Method
```sh
GET
```
* ## URL
```sh
/api/doctors/:id
```
* ## URL Params
```sh
id = string
```
## Response
| Parameter | Type   |
|-----------|--------|
| name      | string |
| lastname  | string |
| birthday  | date   |
| phone     | string |
| email     | string |
| city      | string |
| address   | string |
## Response example
```sh
[
  {
    "_id": "5d1a1173755b345bbd34f009",
    "name": "Jack",
    "lastname": "Gardner",
    "birthday": "1983-06-23T20:20:00.000+00:00",
    "phone": "765-052-5230",
    "email": "gardner@email.com"
    "city": "Whitter",
    "address": "6755 Newline Ave"
  } 
]
```