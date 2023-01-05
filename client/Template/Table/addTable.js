Template.addTable.onCreated(function () {
  var self = this;
  this.autorun(function () {
    self.subscribe("tablePublish", function () {

    });
  })
});
Template.addTable.helpers({
  table: function () {
    return Tables.find();
  },

});
Template.addTable.events({
  "click #addTable": function (event) {
    var tableNumber = $('[id=tableNumber_content]').val().trim();
    var description = $('[id=description_content]').val().trim();
    var size = $('[id=tableSize_content]').val().trim();
    if (Meteor.userId) {
      Meteor.call('addTable', { tableNumber, description, size }, function (err, result) {
        if (err) {
          alert(err);
        }
        else {
          if (!result)
            Router.go('/table');
          else
            alert(result);
        }
      })
    }
  },
  "click #cancel": function (event) {
    Router.go('/table');
  },
});
Template.addTable.onDestroyed(function () {

});