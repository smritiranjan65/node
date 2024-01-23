fs = require('node:fs')

readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8'})

console.log(readableStream)