#!/usr/bin/env node

const WebSocket = require('ws');

const PORT = 3000;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', ws => {
    ws.on('message', data => {
        ws.send(data)
    })
})

console.log(`server run at port ${PORT} !`);