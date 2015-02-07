'use strict';

angular.module('clubguests')
  .factory('getService', ['$http', function ($http) {

    var url = 'http://f2.smartjs.academy/list';

    var getData = function () {
      return $http.get(url)
        .success(function (data) {
          return data;
        })
        .error(function (data, status) {
          console.log(status);
        });
    };

    return {
      getGuests: getData
    };

  }]);
