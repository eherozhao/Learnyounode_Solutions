const map = require('through2-map');
const http = require('http');
const fs = require('fs');
const portNum = process.argv[2];
let server = http.createServer((req, res) => {
    console.log(req.body);
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(portNum);
