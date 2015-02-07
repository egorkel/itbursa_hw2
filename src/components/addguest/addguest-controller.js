'use strict';

angular.module('clubguests')
  .controller('addGuestCtrl', ['$scope','idGenService', 'wsService', function ($scope, idGenService, wsService) {

    $scope.add = function (newName) {

      var guest = {
        id: idGenService.getId(),
        name: newName,
        inHall: false
      };

      $scope.guests.push(guest);
      wsService.send(guest,'add','guest');
    };

  }]);
