const mymodule = require('./mymodular.js');
var dir = process.argv[2];
var fileExtension = process.argv[3];
mymodule(dir, fileExtension, (err, list) => {
    if (err) {
        return console.error(err);
    }
    list.forEach((filename) => {
        console.log(filename);
    })
})
