const ESP32_IP = 'http://192.168.1.123'; // Cambia por la IP del ESP32

function controlar(accion) {
  fetch(`${ESP32_IP}/${accion}`)
    .then(response => response.text())
    .then(data => alert("Respuesta ESP32: " + data))
    .catch(err => alert("Error: " + err));
}
