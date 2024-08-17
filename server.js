const express = require('express');
const escpos = require('escpos');

const app = express();

app.post('/print', (req, res) => {
    const text = req.body.text;

    // Replace with your printer information
    const device = new escpos.Network('192.168.1.188', 9100); // Replace with your printer IP and port

    // Implement logic to send printing commands to device using the text
    device.write(text, 'utf-8');
    device.close();

    res.sendStatus(200); // Send a successful response
});

app.listen(3000, () => console.log('Server listening on port 3000'));
