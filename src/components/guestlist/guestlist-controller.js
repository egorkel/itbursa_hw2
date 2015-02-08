'use strict';

angular.module('clubguests')
  .controller('guestListCtrl', ['$scope', 'wsService', function ($scope, wsService) {
    $scope.update = function (guest) {
      guest.inHall = !guest.inHall;
      wsService.send(guest,'update','guest');
    };

    $scope.remove = function (guest) {
      $scope.guests = _.reject($scope.guests, {id: guest.id});
      wsService.send(guest.id,'remove','id');
    };

  }]);
