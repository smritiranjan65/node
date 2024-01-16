fs = require('node:fs')

console.log('file')
// sync file system
fs.readFile('./a.txt', 'utf-8',(error, data)=>{
    if(error){console.log(error)}
    else{console.log(data)}
})
console.log('mukesh')
// sync file system
b = a.readFileSync('./a.txt', 'utf-8')
console.log(b)
// random async 
console.log('hieee')
console.log('hello')
