Template.login.onCreated(function () {

});
Template.login.helpers({


});
Template.login.events({
  "click #login": function (event) {
    login();
  },
  "click #register": function (event) {
    Router.go('/register')
  },
});
Template.login.onDestroyed(function () {

});
const login = function () {
  var username = $('[id=username_content]').val().trim();
  var password = $('[id=pwd_content]').val().trim();
  Meteor.loginWithPassword(username, password, function (error) {
      var user = {};
      user.username = username;
      if (error) {
        alert("username or password error");
        console.log(error)
      } else {
        user.uid = Meteor.userId();
        if (Roles.userIsInRole(Meteor.userId(), ["user"], null)) {
          Router.go("/reservation");
        } else if (Roles.userIsInRole(Meteor.userId(), ["admin"], null)) {
          Router.go("/reservation");
        }
        else {
          alert("username or password error");
        }
      }
    }
  );
};
