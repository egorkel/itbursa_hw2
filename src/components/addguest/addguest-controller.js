'use strict';

angular.module('clubguests')
  .controller('addGuestCtrl', ['$scope','idGenService', 'wsService', 'dataMGR',
    function ($scope, idGenService, wsService, dataMGR) {

    $scope.add = function (newName) {

      var guest = {
        id: idGenService.getId(),
        name: newName,
        inHall: false
      };

      dataMGR.add($scope.guests, guest);
      wsService.send(guest,'add','guest');
    };

  }]);
