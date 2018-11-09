#!/usr/bin/env node

const WebSocket = require('ws');

const PORT = 3000;

const wss = new WebSocket.Server({ port: PORT });

let clientArr = [];

wss.on('connection', ws => {
    clientArr.push(ws);
    ws.on('message', data => {
        clientArr.forEach(c => {
            c.send(data);
        })
    })
    ws.on('close', () => {
        clientArr = clientArr.filter(c => c != ws);
    })
})
console.log(`server run at port ${PORT} !`);