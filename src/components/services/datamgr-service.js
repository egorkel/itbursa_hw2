'use strict';

angular.module('clubguests')
  .factory('dataMGR', function () {
    var addItem = function (storage, item) {
      storage.push(item);
    };

    var removeItem = function (storage, itemId) {
      return _.reject(storage, {id: itemId});
    };

    var updateItem = function (storage, id, prop, state) {
      _.find(storage, function (item) {
        return item.id === id;
      })[prop] = state;
    };

    return {
      add: addItem,
      update: updateItem,
      remove: removeItem
    };
  });
