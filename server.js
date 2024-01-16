http = require('node:http')
// Creating a server
server = http.createServer((req, res) =>{

    data = {name:"smriti", location:"patna"}
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(data))
})

// server response

server.listen(3000, ()=>{console.log('server up')})