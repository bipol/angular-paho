(function() {
  angular.module('app', ['angularPaho']);
})();

(function() {
  angular.module('app').controller('test', [ '$scope', 'MqttClient', function($scope, MqttClient) {

    var ip = "192.168.10.241";
    var port = "9001";
    var id = "test";

    MqttClient.init(ip, port, id);
    MqttClient.connect({onSuccess: successCallback});

    function successCallback() {
      MqttClient.subscribe('/World');
      message = new Paho.MQTT.Message("Hello");
      message.destinationName = "/World";
      MqttClient.send(message);
    }
  }]);
})();
