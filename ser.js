a = require('node:http')

server = a.createServer((req,res) => {
    res.writeHead(404)
    res.end("<h1 style='color:red; text-align:center' >this is my first node server</h1>")
})

server.listen(4000, ()=>{console.log('server running')})