'use strict';

angular.module('clubguests')
  .factory('getService', ['$http', function ($http) {

    var url = 'http://f2.smartjs.academy/list';

    var getData = function () {
      return $http.get(url);
    };

    return {
      getGuests: getData
    };

  }]);
