fs = require('node:fs')
// Readable stream
readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8', highWaterMark: 6})

// Writable stream
writeableStream = fs.createWriteStream('./patna.txt')
// piping
readableStream.pipe(writeableStream)
// creating chunks
//readableStream.on("data", (chunk )=>{

   // console.log(chunk)
   // writeableStream.write(chunk)
//})

//console.log(readableStream)