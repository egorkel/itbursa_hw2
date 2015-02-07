'use strict';

angular.module('clubguests')
  .controller('addGuestCtrl', ['$scope','idGenService', function ($scope, idGenService) {

    $scope.add = function (newName) {

      var guest = {
        id: idGenService.getId(),
        name: newName,
        inHall: false
      };

      $scope.guests.push(guest);
    };

  }]);
