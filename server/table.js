import { Tables } from "./collections";
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'disableTable': function (tableId) {
    try {
      Tables.update({ _id: tableId }, { $set: { isDisabled: true } });
      return 'table disabled';
    } catch (e) {
      throw e;
    }
  },
  'enableTable': function (tableId) {
    try {
      Tables.update({ _id: tableId }, { $set: { isDisabled: false } });
      return 'table enabled';
    } catch (e) {
      throw e;
    }
  },
  'addTable': function (table) {
    try {
      if (Tables.findOne({ tableNumber: table.tableNumber })) {
        return 'Duplicated table number';
      }
      table.isDisabled = false;
      Tables.insert(table);
      return null;
    } catch (e) {
      throw e;
    }
  },
});
