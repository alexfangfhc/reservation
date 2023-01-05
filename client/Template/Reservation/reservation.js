Template.reservation.onCreated(function () {
  Session.set('reservation', {})
  var self = this;
  this.autorun(function () {
    self.subscribe("reservationPublish", function () {

    });
  })
});
Template.reservation.helpers({
  reservation: function () {
    const reservations = Reservations.find(Session.get('reservation')).fetch()
    reservations.map(reservation => {
      reservation.expectedArrivalTime = moment(new Date(reservation.expectedArrivalTime)).format("YYYY-MM-DD hh:mm:ss");
      return reservation;
    })
    return reservations;
  },
  showBtn: function (status) {
    return status !== 'Completed' && status !== 'Canceled'
  }
});
Template.reservation.events({
  "click .btnDefault": function (event) {
    Router.go('/newReservation');
  },
  "click .btnUpdate": function (event) {
    var id = event.currentTarget.id;
    var reservation = {
      _id: id,
      guestName: $('#' + this._id + '_guestName').val(),
      guestContactInfo: $('#' + this._id + '_guestContactInfo').val(),
      expectedArrivalTime: $('#' + this._id + '_expectedArrivalTime').val(),
      reservedTableSize: $('#' + this._id + '_reservedTableSize').val(),
      reservedTableNumber: this.reservedTableNumber.toString()
    }
    console.log(reservation)
    Meteor.call('updateReservation', reservation, function (err, result) {
      if (err) {
        console.log(err)
        alert('error')
      } else {
        alert(result)
      }
    });
  },
  "click .btnCancel": function (event) {
    var id = event.currentTarget.id;
    Meteor.call('updateReservationStatus', id, 'Canceled', function (err, result) {
      if (err) {
        console.log(err)
        alert('error')
      } else {
        alert(result)
      }
    });
  },
  "click .btnComplete": function (event) {
    var id = event.currentTarget.id;
    Meteor.call('updateReservationStatus', id, 'Completed', function (err, result) {
      if (err) {
        console.log(err)
        alert('error')
      } else {
        alert(result)
      }
    });
  },
  "click .btnLogout": function (event) {
    Meteor.logout()
  },
  "click .btnViewTables": function (event) {
    Router.go('/table');
  },
  "click .btnViewAll": function (event) {
    Session.set('reservation', {})
  },
  "click .btnViewCompletedReservation": function (event) {
    Session.set('reservation', {status: 'Completed'})
  },
  "click .btnViewCanceledReservation": function (event) {
    Session.set('reservation', {status: 'Canceled'})
  },
  "click .btnViewReservedReservation": function (event) {
    Session.set('reservation', {status: 'Reserved'})
  },
  "click .btnViewByDate": function (event) {
    const date = $('#viewByDate').val();
    const dateStart = new Date(moment(date).startOf('d'));
    const dateEnd = new Date(moment(date).endOf('d'))
    const reservationCondition = {
      expectedArrivalTime: {$gte: dateStart, $lte: dateEnd},
    }
    Session.set('reservation', reservationCondition)
  },
});
Template.reservation.onDestroyed(function () {

});