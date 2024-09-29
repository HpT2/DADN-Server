const dgram = require('dgram');

let socket = dgram.createSocket('udp4');
socket.bind('1234');
socket.send('{"state":"menu","data":{}}', 9999, '192.168.1.5', (error) => {console.log(error); socket.close()})