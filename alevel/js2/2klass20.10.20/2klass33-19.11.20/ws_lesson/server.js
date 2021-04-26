const http = require('http');
const express = require('express');
const WebSocetServer = require('ws').Server;

const app = express();

app.use('/', express.static('front'));

app.get('/users', (req, res) => {
    res.json({name: 'vasya'})
})

const server = http.createServer(app);

const socetServer = new WebSocetServer({server});

socetServer.on('connection', client => {
    client.on('message', (message) => {
        socetServer.clients.forEach(client => {
            client.send(message);
        })
    })
    client.send('Socket works');
})

server.listen(3000, () => console.log('Server listen port:3000'))