const fs = require('fs');
const path = require('path');

module.exports = function(dir, fileExten, callback) {
    fs.readdir(dir, (err, list)=> {
        if (err) {
            return callback(err);
        }
        var filteredFiles = [];
        list.forEach((file) => {
            if (path.extname(file) === '.' + fileExten) {
                filteredFiles.push(file);
            }
        });

        callback(null, filteredFiles);
    });
}
