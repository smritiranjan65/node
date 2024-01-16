fs = require('node:fs')
// writing file system syncronously: code below
// fs.writeFileSync('./b.txt', 'hasmukhwa')

// writing file asyncrhonously and updating(append-): code below
fs.writeFile('./c.txt', 'pyara hasmukh ',{flag: "a"},(error)=>{
    if(error){console.log(error)}
    else{console.log('written')}
})
