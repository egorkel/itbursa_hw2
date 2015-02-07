'use strict';

angular.module('clubguests')
  .controller('guestListCtrl', ['$scope', 'wsService', function ($scope, wsService) {
    $scope.move = function (guest) {
      guest.inHall = !guest.inHall;
      wsService.send(guest,'update','guest');
    };

    $scope.del = function (guest) {
      //TODO: 1) replace with lowdash
      $scope.guests = $scope.guests.filter(function (elem) {
        return elem.id !== guest.id;
      });
      wsService.send(guest.id,'remove','id');
    };

  }]);
