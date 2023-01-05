Template.table.onCreated(function () {
  var self = this;
  this.autorun(function () {
    self.subscribe("tablePublish", function () {

    });
  })
});
Template.table.helpers({
  table: function () {
    const tables = Tables.find().fetch()
    tables.map(table => {
      table.status = table.isDisabled ? 'disabled' : 'enabled';
      return table;
    })
    return tables;
  },

});
Template.table.events({
  "click #btnAddTable": function (event) {
    Router.go('/addTable');
  },
  "click #btnBack": function (event) {
    Router.go('/reservation');
  },
  "click .disableTable": function (event) {
    if (Meteor.userId && this._id) {
      Meteor.call('disableTable', this._id, function (err, result) {
        if (err) {
          console.log(err);
        }
      })
    }
  },
  "click .enableTable": function (event) {
    if (Meteor.userId && this._id) {
      Meteor.call('enableTable', this._id, function (err, result) {
        if (err) {
          console.log(err);
        }
      })
    }
  },
});
Template.table.onDestroyed(function () {

});