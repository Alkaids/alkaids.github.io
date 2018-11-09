const http = require('http');

let app = http.createServer((req, res)=>{
    res.end('hello king');
})

app.listen(3333);
