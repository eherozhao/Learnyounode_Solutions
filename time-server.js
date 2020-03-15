const net = require('net');
function zeroPad(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

const server = net.createServer(function (socket) {
    let date = new Date();
    let year = date.getFullYear();
    let month = zeroPad(date.getMonth() + 1);
    let day = zeroPad(date.getDate());
    let hour = zeroPad(date.getHours());
    let minute = zeroPad(date.getMinutes());
    let dateStr = year + '-' + month + '-' + day
    + ' ' + hour + ':' + minute;

    socket.end(dateStr + '\n');
})
server.listen(process.argv[2]);
