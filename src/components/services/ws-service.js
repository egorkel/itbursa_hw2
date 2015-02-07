'use strict';
/*global WebSocket*/

angular.module('clubguests')
  .factory('wsService', function () {

    var url = 'ws://f2.smartjs.academy/ws';
    var ws = new WebSocket(url);

    var callback;
    var setCallback = function (func) {
      callback = func;
    };

    var sendFunc = function (data, action, field) {
      //И почему при 'remove' отправляется только id, а не весь guest?
      //Было бы удобно параметризовать, а так нужны костыли :(
      var obj = {
        action: action
      };
      obj[field] = data;
      ws.send(JSON.stringify(obj));
    };

    ws.onmessage = function (event) {
      var data = JSON.parse(event.data);
      callback(data);
    };

    return {
      setCallback: setCallback,
      send: sendFunc
    };

  });
