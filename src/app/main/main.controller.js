'use strict';

angular.module('clubguests')
  .controller('MainCtrl', ['$scope', 'getService', function ($scope, getService) {

    getService.getGuests().then(function (data) {
      $scope.guests = data;
    });

  }]);
