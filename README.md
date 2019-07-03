# API 
Return list clients for "Patients" table
```sh
/api/clients
```
| Parameter | Type   |
|-----------|--------|
| name      | string |
| lastname  | string |
| birthday  | date   |
| phone     | string |
| lasteAppt | date   |

## Response example
```sh
{
  "name": "Deric",
  "lastname": "Lawson",
  "birthday": "1983-04-19T20:20:00.000+00:00",
  "phone": "765-052-5230",
  "lasteApt": "2019-05-19T21:00:00.000+00:00"
}
```
#
