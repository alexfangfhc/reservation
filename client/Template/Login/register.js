Template.register.onCreated(function () {

});
Template.register.helpers({


});
Template.register.events({
  "click #cancel": function (event) {
    Router.go('/')
  },
  "click #register": function (event) {
    register();
  },
});
Template.register.onDestroyed(function () {

});

const register = function () {
  var username = $('[id=username_content]').val().trim();
  var password = $('[id=pwd_content]').val().trim();
  var email = $('[id=email_content]').val().trim();
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!pattern.test(email)) {
    alert('Invalid Email');
    return
  }
  Meteor.call("registerWithEmail", username, password, email, function (error, result) {
    if (error) {
      alert(error);
      console.log(error)
    } else {
      if (result) {
        alert(result);
      }
      else {
        Meteor.loginWithPassword(username, password, function (error) {
          Router.go("/reservation");
        });
      }
    }
  });
};