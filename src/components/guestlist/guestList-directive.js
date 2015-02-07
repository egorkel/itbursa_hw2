'use strict';

angular.module('clubguests')
  .directive('guestList', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/guestlist/guestlist.html',
      scope: {
        guests: '=',
        title: '@',
        param: '@'
      },
      controller: 'guestListCtrl'
    };
  });
