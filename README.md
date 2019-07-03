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
## Response array object
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
## Response array object
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
    "name": string,
    "lastname": string,
    "birthday": date,
    "phone": string,
    "email": string,
    "city": string,
    "address": string
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
## Response array object
| Parameter | Type   |
|-----------|--------|
| startDate | date   |
| endDate   | date   |
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
## Response array object
| Parameter     | Type   |
|---------------|--------|
| nameType      | string |
| listProcedure | array  |
### listProcedure
| Parameter   | Type    |
|-------------|---------|
| name        | string  |
| cost        | integer |
| idProcedure | string  |
## Response example
```sh
[
  {
    "nameType": string,
    "listOperation": [{
      "name": string,
      "cost"; integer,
      "idProcedure": string
    }, {
      "name": string,
      "cost"; integer,
      "idProcedure": string
    }]
  }, {
    "nameType": string,
    "listOperation": [{
      "name": string,
      "cost"; integer,
      "idProcedure": string
    }, {
      "name": string,
      "cost"; integer,
      "idProcedure": string
    }]
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
## Response array object
| Parameter   | Type   |
|-------------|--------|
| startDate   | date   |
| endDate     | date   |
| idProcedure | string |
## Response example
```sh
[
  {
    "startDate": date,
    "endDate": date,
    "idProcedure": string
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
## Response array object
| Parameter        | Type        |
|------------------|-------------|
| listComplaints   | arrayString |
| listAllergies    | arraySting  |
| listPreparations | arraySting  |
| listNotes        | array       |
| listDocuments    | array       |

* ## listNotes
| Parameter | Type   |
|-----------|--------|
| textNotes | string |
| dateNotes | date   |

* ## listDocuments
| Parameter     | Type   |
|---------------|--------|
| nameDocuments | string |
| URLDocuments  | string |

## Response example
```sh
[
  {
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
      "nameDocuments": string
      "URLDocuments": string
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
## Response array object
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
    "_id": string,
    "name": string,
    "lastname": string,
    "birthday": date,
    "phone": string,
    "email": string,
    "city": string,
    "address": string
  } 
]
```
#
## Return "Age of patient" dashboard
## Request
* ## Method
```sh
POST
```
* ## URL
```sh
/api/analytics/age
```
## Response array object
| Parameter | Type    |
|-----------|---------|
| ageJunior | integer |
| ageMiddle | integer |
| ageSenior | integer |
## Response example
```sh
[
  {
    "ageJunior": integer,
    "ageMiddle": integer,
    "ageSenior": integer
  } 
]
```
#
## Return "New patient" dashboard of the years
## Request
* ## Method
```sh
POST
```
* ## URL
```sh
/api/analytics/new/years
```
## Response array object
| Parameter | Type  |
|-----------|-------|
| listMonth | array |
* ## listMonth
| Parameter  | Type    |
|------------|---------|
| nameMonth  | string  |
| numClients | integer |
## Response example
```sh
[
  {
    "listMonth": [{
      "nameMonth": string,
      "numClients": integer
    }, {
      "nameMonth": string,
      "numClients": integer
    }]
  } 
]
```