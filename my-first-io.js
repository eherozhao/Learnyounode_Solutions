const fs = require('fs');
if (process.argv.length <= 2) {
    console.log('Please specify the file');
    return;
}
const str =  fs.readFileSync(process.argv[2]).toString();
const lines = str.split('\n').length - 1;
console.log(lines);

