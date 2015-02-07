'use strict';

angular.module('clubguests')
  .controller('guestListCtrl', ['$scope', function ($scope) {
    $scope.move = function (guest) {
      //TODO: 1) send via ws
      guest.inHall = !guest.inHall;
    };

    $scope.del = function (guest) {
      //TODO: 1) replace with lowdash 2) send via ws
      $scope.guests = $scope.guests.filter(function (elem) {
        return elem.id !== guest.id;
      });
    };

  }]);
