// Router.configure({
//     layoutTemplate: 'layout'
// });

Router.map(function () {
  this.route("table", {
    name: 'table',
    action(params, queryParams) {
      if (Meteor.userId())
        this.render();
      else
        Router.go("/");
    }
  });
  this.route("reservation", {
    name: 'reservation',
    action(params, queryParams) {
      if (Meteor.userId())
        this.render();
      else
        Router.go("/");
    }
  });
  this.route("newReservation", {
    name: 'newReservation',
    action(params, queryParams) {
      if (Meteor.userId())
        this.render();
      else
        Router.go("/");
    }
  });
  this.route('login', {path: '/'});
});

