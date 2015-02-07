'use strict';

angular.module('clubguests')
  .controller('MainCtrl', ['$scope', 'getService', 'wsService', function ($scope, getService, wsService) {

    getService.getGuests().success(function (data) {
      $scope.guests = data;
    });

    var action = function (guests, data) {
      var action = {
        'add': function () {
          guests.push(data.guest);
        },
        'remove': function () {
          //TODO: use lowdash
          guests = guests.filter(function (elem) {
            return elem.id !== data.id;
          });
        },
        'update': function () {
          //TODO: use lowdash
          guests.forEach(function (guest) {
            if (guest.id === data.guest.id) {
              guest.inHall = data.guest.inHall;
            }
          });
        },
        'default': function () {
          console.log('Unknown action ' + data.action);
        }
      };

      (action[data.action] || action['default'])();
    };

    var onWSMessage = function (data) {
      action($scope.guests, data);
      //$scope.$evalAsync();
    };

    wsService.setCallback(onWSMessage);

  }]);
