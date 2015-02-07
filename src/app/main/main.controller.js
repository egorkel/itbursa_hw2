'use strict';

angular.module('clubguests')
  .controller('MainCtrl', ['$scope', 'getService', 'wsService', function ($scope, getService, wsService) {

    getService.getGuests().success(function (data) {
      $scope.guests = data;
    });

    var action = function (data) {
      var action = {
        'add': function () {
          $scope.guests.push(data.guest);
        },
        'remove': function () {
          //TODO: use lowdash
          $scope.guests = $scope.guests.filter(function (elem) {
            return elem.id !== data.id;
          });
        },
        'update': function () {
          //TODO: use lowdash
          $scope.guests.forEach(function (guest) {
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
      action(data);
      $scope.$evalAsync();
    };

    wsService.setCallback(onWSMessage);

  }]);
