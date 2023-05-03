window.MQTT_PORT = 9001;
var host= "192.168.0.100";

function start_connection() {
  setTimeout(ui_connecting_animation.bind(null, true), 0); // async

  window.host = host;//document.getElementById("host-ip").value;//"192.168.1.101";// canviar aixo pel host de la raspberry: direcció IP. Ara: "localhost"
 
  window.mqtt = new MQTT(
    window.host,
    MQTT_PORT,
    console.log,
    (err) => { // On error message:
      setTimeout(ui_connecting_animation.bind(null, false), 0); // async
      message(err);
  });
  window.mqtt.on_connect(() => {
    ui_connecting_animation(false);
    pantalla('panel');
    message('Connected to robot ✔');
  });
  window.mqtt.connect();
}
