http = require('node:http')
fs = require('node:fs')
// Creating a server and parsing data
server = http.createServer((req, res) =>{
// routing files
    if(req.url === './index.html'){res.end('./index.html')}
    if(req.url === '/home'){res.end('home page')}
})

// server response

server.listen(3000, ()=>{console.log('server up')})