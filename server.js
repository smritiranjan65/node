http = require('node:http')
fs = require('node:fs')
// Creating a server and parsing data
server = http.createServer((req, res) =>{
html = fs.readFileSync('./index.html', 'utf-8')
    
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end(html)
})

// server response

server.listen(3000, ()=>{console.log('server up')})