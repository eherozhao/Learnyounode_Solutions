const fs = require('fs');
if (process.argv.length <= 2) {
    console.log('please specify the arg');
    return;
}

fs.readFile(process.argv[2],function finishRead(error, data){
    if (error) return console.error(error);
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
})


