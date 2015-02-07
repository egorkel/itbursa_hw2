'use strict';

angular.module('clubguests')
  .controller('addGuestCtrl', ['$scope','idGen', function ($scope, idGen) {

    $scope.add = function (newName) {

      var guest = {
        id: idGen.getId(),
        name: newName,
        inHall: false
      };

      $scope.guests.push(guest);
    };

  }]);
