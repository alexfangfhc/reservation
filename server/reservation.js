import { Tables, Reservations } from "./collections";
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'addReservation': function (reservation) {
    try {
      if (new Date(reservation.expectedArrivalTime) < new Date()) {
        return 'Reservation date should be future'
      }
      var result = checkTableAvailable(reservation.expectedArrivalTime, reservation.reservedTableSize);
      if (result.availableTables > 0) {
        reservation.reservedTableNumber = result.reservedTableNumber;
        reservation.status = 'Reserved';
        reservation.reservedTableNumber = result.reservedTableNumber;
        reservation.expectedArrivalTime = new Date(reservation.expectedArrivalTime);
        const user = Meteor.users.findOne({ _id: Meteor.userId() })
        reservation.createdBy = Meteor.userId();
        reservation.createdUser = user.username;
        reservation.createdAt = new Date();
        reservation.updatedBy = Meteor.userId();
        reservation.updatedUser = user.username;
        reservation.updatedAt = new Date();
        Reservations.insert(reservation);
        return 'Success';
      }
      else {
        return 'No table available';
      }
    } catch (e) {
      throw e;
    }
  },
  'updateReservation': function (reservation) {
    try {
      if (new Date(reservation.expectedArrivalTime) < new Date()) {
        return 'Reservation date should be future'
      }
      var result = checkTableAvailable(reservation.expectedArrivalTime, reservation.reservedTableSize, reservation.reservedTableNumber);
      if (result.availableTables > 0) {
        reservation.reservedTableNumber = result.reservedTableNumber;
        const user = Meteor.users.findOne({ _id: Meteor.userId() })
        reservation.updatedBy = Meteor.userId();
        reservation.updatedUser = user.username;
        reservation.updatedAt = new Date();
        Reservations.update({ _id: reservation._id }, { $set: reservation });
        return 'Success';
      }
      else {
        return 'No table available';
      }
    } catch (e) {
      throw e;
    }
  },
  'updateReservationStatus': function (_id, status) {
    try {
      const user = Meteor.users.findOne({ _id: Meteor.userId() })
      Reservations.update({ _id }, {
        $set: {
          status,
          updatedUser: user.username,
          updatedBy: Meteor.userId(),
          updatedAt: new Date()
        }
      });
      return 'Success';

    } catch (e) {
      throw e;
    }
  },
});

const checkTableAvailable = function (date, size, tableNumber) {
  const availableTables = Tables.find({ size: { $gte: Number(size) }, isDisabled: false }).fetch();
  const dateStart = new Date(moment(date).startOf('d'));
  const dateEnd = new Date(moment(date).endOf('d'))
  const reservationCondition = {
    expectedArrivalTime: { $gte: dateStart, $lte: dateEnd },
    status: 'Reserved'
  }
  const reservations = Reservations.find(reservationCondition).fetch();
  let reservedTableNumber = reservations.map(reservation => {
    return reservation.reservedTableNumber
  });
  reservedTableNumber = reservedTableNumber.filter(n => n != tableNumber);
  const tables = availableTables.filter(table => reservedTableNumber.indexOf(table.tableNumber) === -1)
  return { availableTables: tables.length, reservedTableNumber: tables.length > 0 ? tables[0].tableNumber : null }
}