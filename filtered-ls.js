//path process.argv[1]
//file extension process.argv[2]

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function(err, list){
    if (err) {
        console.error(err);
        return;
    }

    list.forEach((file) => {
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file);
        };
    });
});
