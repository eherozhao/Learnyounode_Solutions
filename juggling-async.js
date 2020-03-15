'use strict'
const http = require('http')
const bl = require('bl')
const res = []
let cnt = 0

// Print the result array in order from 1 to 3;
function printRes() {
    for (let i = 0; i < 3; i++) {
        console.log(res[i]);
    }
}

// Get the data from 3 URL and save them into the result array orderly
function httpGet (idx) {
    http.get(process.argv[2 + idx], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            res[idx] = data.toString();
            cnt++;

            if (cnt === 3) {
                printRes()
            }
        }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}
