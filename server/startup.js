import { Tables } from "./collections";

Meteor.startup(function () {
  if (!Meteor.users.findOne({username: 'admin'})) {
    Roles.createRole('user', {unlessExists: true});
    Roles.createRole('admin', {unlessExists: true});
    var uid = Accounts.createUser({
      username: 'admin',
      email: 'admin@admin.com',
      password: 'admin'
    });
    console.log(uid)
    Roles.addUsersToRoles(uid, "admin", null);
    uid = Accounts.createUser({
      username: '13917119080',
      email: '13917119080@test.com',
      password: '13917119080'
    });
    console.log(uid)
    Roles.addUsersToRoles(uid, "user", null);
    uid = Accounts.createUser({
      username: '13988888888',
      email: '13988888888@test.com',
      password: '13988888888'
    });
    Roles.addUsersToRoles(uid, "user", null);
  }
  if (Tables.find().count() === 0) {
    Tables.insert({
      tableNumber: "1",
      size: 4,
      description: "beside the window",
      isDisabled: false
    });
    Tables.insert({
      tableNumber: "2",
      size: 4,
      description: "beside the window",
      isDisabled: false
    });
    Tables.insert({
      tableNumber: "3",
      size: 8,
      description: "big table",
      isDisabled: false
    });
    Tables.insert({
      tableNumber: "4",
      size: 8,
      description: "big table",
      isDisabled: false
    });
    Tables.insert({
      tableNumber: "5",
      size: 2,
      description: "small table",
      isDisabled: false
    });
    Tables.insert({
      tableNumber: "6",
      size: 2,
      description: "small table",
      isDisabled: false
    });
  }
});
