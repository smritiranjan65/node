fs = require('node:fs')
zlib = require('node:gzip')

gzip=zlib.createGzip()

// Readable stream
readableStream = fs.createReadStream('./new.txt', {encoding:'utf-8', highWaterMark: 6})
// zipping files
readableStream.pipe(gzip).pipe(fs.WriteStream('./knp.txt.gz'))

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