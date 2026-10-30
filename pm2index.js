const express = require('express');
const app = express();
const crypto = require('crypto');
const pm2 = require('pm2');
const os = require('os');

// run the app with pm2 start pm2index.js -i 0

// pm2 list
// pm2 delete pm2index
// pm2 monit 
// pm2 show 


function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        // Busy waiting.
        // This is a blocking operation in event loop. Event loop will release the control 
        // after the duration.
    }
    console.log('Done with ' + duration + 'ms');
}


app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('1 second password derived!');
        res.send('Hi there ');
    });
});

app.get('/blockingEventLoopByDuration=5000', (req, res) => {
    doWork(5000);
    res.send('Hi there ');
});

app.get('fast', (req, res) => {
    res.send('This was fast!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});