Template.table.onCreated(function () {
  var self = this;
  this.autorun(function () {
    self.subscribe("tablePublish", function () {

    });
  })
});
Template.table.helpers({
  table: function () {
    return Tables.find();
  },

});
Template.table.events({
  "click .addTable": function (event) {
    var number = $("#" + this._id)[0].value;
    console.log(number)
    if (this.userId && number) {
      Meteor.call('addTable', this.userId, number, function (err) {
        if (!err) {
          alert('Table added.');
        }
      })
    }
  },
  "click #btnBack": function (event) {
    Router.go('/reservation');
  },
});
Template.table.onDestroyed(function () {

});