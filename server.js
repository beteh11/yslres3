const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const escpos = require('escpos');

// Replace with your printer's IP address
const printerIP = '192.168.1.188';
const printerPort = 9100;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('printData', (data) => {
    const device = new escpos.Network(printerIP, printerPort);

    // Convert data to ESC/POS commands (replace with your logic)
    device.write(data.text, 'utf-8'); // Example for text printing

    device.close();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
