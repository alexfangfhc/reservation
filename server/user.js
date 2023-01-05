import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'registerWithEmail': function (username, password, email) {
    try {
      var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!pattern.test(email)) {
        return 'Invalid Email';
      }
      if (!username || !password) {
        return 'Invalid username or password';
      }
      var uid = Accounts.createUser({
        username: username,
        password: password
      });
      Roles.addUsersToRoles(uid, "user", null);
      return null;
    } catch (e) {
      throw e;
    }
  },
});
