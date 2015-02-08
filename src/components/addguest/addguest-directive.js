'use strict';

angular.module('clubguests')
  .directive('addGuest', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/addguest/addguest.html',
      scope: {
        guests: '='
      },
      controller: 'addGuestCtrl'
    };
  });
