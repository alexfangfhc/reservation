import { Mongo } from 'meteor/mongo'

/**
 {
     _id: "123"
     tableNumber: "1",
     size: 4,
     description: "beside the window",
     isDisabled: false

 }
 */
const Tables = new Mongo.Collection("tables");

/**
 {
            _id: "123"
            "guestName": "Alex Fang",
            "guestContactInfo": "13917119080",
            "expectedArrivalTime": ISODate("2023-01-11T09:39:26.248Z"),,
            "reservedTableSize": 3,
            "reservedTableNumber": "1",
            "status": "completed",
            "createdAt": new Date(),
            "createdBy": "userId",
            "updatedAt": new Date(),
            "updatedBy": "userId",

 }
 */
const Reservations = new Mongo.Collection("reservations");

export { Tables, Reservations }
