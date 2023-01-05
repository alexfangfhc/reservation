Template.newReservation.helpers({
  reservation: function () {
    return Reservations.find();
  },

});
Template.newReservation.events({
  "click #btnAddReservation": function (event) {
    const reservation = {
      guestName: $('#guestName').val(),
      guestContactInfo: $('#guestContactInfo').val(),
      expectedArrivalTime: $('#expectedArrivalTime').val(),
      reservedTableSize: $('#numberOfGuest').val(),
    };
    Meteor.call('addReservation', reservation, function (err, result) {
      if (err) {
        console.log(err)
        alert('error')
      } else {
        alert(result)
        Router.go('/reservation');
      }
    });
  },
  "click #btnBack": function (event) {
    Router.go('/reservation');
  },
});

Template.newReservation.onDestroyed(function () {

});