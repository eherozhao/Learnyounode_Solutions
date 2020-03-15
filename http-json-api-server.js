const http = require('http');
const url = require('url');

let portNum = process.argv[2];

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});

    const myURL = url.parse(request.url, true);

    let pathName = myURL.pathname;
    let qDate = new Date(myURL.query.iso);
    let output;

    if (pathName === '/api/parsetime') {
        output = {
            hour: qDate.getHours(),
            minute: qDate.getMinutes(),
            second: qDate.getSeconds()
        };
    }
    else if (pathName === '/api/unixtime') {
        output = {
            unixtime: qDate.getTime()
        };
    }

    response.end(JSON.stringify(output));
});

server.listen(portNum);
