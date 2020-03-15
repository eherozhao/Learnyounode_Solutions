const http = require('http');
const fs = require('fs');

let portNum = process.argv[2];
let locFile = process.argv[3];

const server = http.createServer((request, response) => {
   fs.createReadStream(locFile).pipe(response);
})


server.listen(portNum);


