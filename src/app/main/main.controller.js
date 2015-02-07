'use strict';

angular.module('clubguests')
  .controller('MainCtrl', ['$scope', 'getService', function ($scope, getService) {

    getService.getGuests().success(function (data) {
      $scope.guests = data;
    });

  }]);
