const express = require('express');
const app = express();

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
    res.send('Hi there ');
});

app.get('/blockingEventLoopByDuration=5000', (req, res) => {
    doWork(5000);
    res.send('Hi there ');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});