import { Tables, Reservations } from "./collections";

Meteor.publish("tablePublish", function () {
  if (Roles.userIsInRole(Meteor.userId(), ["admin"], null))
    return Tables.find({});
});

Meteor.publish("reservationPublish", function () {
  if (Roles.userIsInRole(Meteor.userId(), ["admin"], null))
    return Reservations.find({});
  return Reservations.find({createdBy: Meteor.userId()});
});
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({'user._id': this.userId});
  } else {
    this.ready()
  }
})