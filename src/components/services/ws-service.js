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
      //Не, я догадываюсь, конечно, для уменьшения трафика, но все же.
      //Тогда и при 'update' можно было бы 2 поля передавать.
      var obj = {
        action: action
      };
      obj[field] = data;
      ws.send(JSON.stringify(obj));
    };

    //На всяк случай безкостыльная версия
    //var sendFunc = function (data, action) {
    //  ws.send(JSON.stringify({
    //    action: action,
    //    guest: data
    //  }));
    //};

    ws.onmessage = function (event) {
      var data = JSON.parse(event.data);
      callback(data);
    };

    return {
      setCallback: setCallback,
      send: sendFunc
    };

  });
