'use strict';

angular.module('clubguests')
  .controller('MainCtrl', ['$scope', 'getService', 'wsService', 'dataMGR',
    function ($scope, getService, wsService, dataMGR) {

    //Initial data from server
    getService.getGuests().then(function (resp) {
      $scope.guests = resp.data;
    });

    //Updating data through ws
    var onWSMessage = function (data) {
      var action = {
        'add': function () {
          dataMGR.add($scope.guests, data.guest);
        },
        'remove': function () {
          $scope.guests = dataMGR.remove($scope.guests, data.id);
        },
        'update': function () {
          dataMGR.update($scope.guests, data.guest.id, 'inHall', data.guest.inHall);
        },
        'default': function () {
          console.log('Unknown action ' + data.action);
        }
      };

      (action[data.action] || action['default'])();

      $scope.$evalAsync();
    };

    wsService.setCallback(onWSMessage);

  }]);
