http = require('node:http')
// Creating a server
server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("<h1>hey there</h1>")
})

// server response

server.listen(3000, ()=>{console.log('server up')})