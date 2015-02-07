'use strict';
/*global WebSocket*/

angular.module('clubguests')
  .factory('wsService', function () {

    var url = 'ws://f2.smartjs.academy/ws';
    var ws = new WebSocket(url);

    ws.onmessage = function (event) {
      var data = JSON.parse(event.data);

      switch (data.action)
      {
        case 'add':
          var addGuest = {
            id: data.guest.id,
            name: data.guest.name,
            inHall: data.guest.inHall
          };
          ctrl.guests.push(addGuest);
          break;
        case 'remove':
          ctrl.guests = ctrl.guests.filter(function (elem) {
            return elem.id !== data.id;
          });
          break;
        case 'update':
          ctrl.guests.forEach(function (guest) {
            if (guest.id === data.guest.id) {
              guest.inHall = data.guest.inHall;
            }
          });
          break;
      }

      $scope.$evalAsync();
    };

    return {

    };

  });
