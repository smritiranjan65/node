fs = require('node:fs')

readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8'})

writeableStream = fs.createWriteStream('./patna.txt')

readableStream.on("data", (chunk )=>{

    console.log(chunk)
    writeableStream.write(chunk)
})

//console.log(readableStream)