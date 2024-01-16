http = require('node:http')
// Creating a server
server = http.createServer((req, res) =>{
    res.writeHead(404)
    res.end("hey there")
})

// server response

server.listen(3000, ()=>{console.log('server up')})