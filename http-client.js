const http = require('http');
// corner case
http.get(process.argv[2],(res) => {
    res.setEncoding('utf8');

    res.on('error', (error) => {
        console.error(error);
    });

    res.on('data', (data) => {
        console.log(data);
    })
})
