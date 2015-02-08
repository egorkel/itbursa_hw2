'use strict';

angular.module('clubguests')
  .controller('MainCtrl', ['$scope', 'getService', 'wsService', function ($scope, getService, wsService) {

    //Initial data from server
    getService.getGuests().then(function (resp) {
      $scope.guests = resp.data;
    });

    //Updating data through ws
    var action = function (data) {
      var action = {
        'add': function () {
          $scope.guests.push(data.guest);
        },
        'remove': function () {
          $scope.guests = _.reject($scope.guests, {id: data.id});
        },
        'update': function () {
          _.find($scope.guests, function (guest) {
            return guest.id === data.guest.id;
          }).inHall = data.guest.inHall;
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
