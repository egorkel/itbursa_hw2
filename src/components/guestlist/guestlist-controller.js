'use strict';

angular.module('clubguests')
  .controller('guestListCtrl', ['$scope', 'wsService', 'dataMGR',
    function ($scope, wsService, dataMGR) {
    $scope.update = function (guest) {
      dataMGR.update($scope.guests, guest.id, 'inHall', !guest.inHall);
      wsService.send(guest,'update','guest');
    };

    $scope.remove = function (guest) {
      $scope.guests = dataMGR.remove($scope.guests, guest.id);
      wsService.send(guest.id,'remove','id');
    };

  }]);
