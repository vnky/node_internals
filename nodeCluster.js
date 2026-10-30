const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// cluster mode is used to run multiple instances of the same application on multiple CPUs.

if (cluster.isPrimary) {
   //cause index.js to be excuted again but in new child mode
   console.log('Master cluster is running');
   // fork method will execute the index.js file again in new child mode
       // so we will go to else block and runs in worker instances

   cluster.fork(); // one fork is nothing but one child process
   

   cluster.fork();
   cluster.fork();
   cluster.fork(); // multiple forks are nothing but multiple worker/child processes



} else {
console.log('Worker cluster is running');

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
    doWork(5000);
    res.send('Hi there ');
});

app.get('/fast', (req, res) => {
    res.send('Fast response');
});

app.get('/blockingEventLoopByDuration=5000', (req, res) => {
    doWork(5000);
    res.send('Hi there ');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
}
// this is what happens in cluster mode.
// Run node nodeCluster.js ( 4 forks())
// Master cluster is running
// Worker cluster is running
// Worker cluster is running
// Worker cluster is running
// Worker cluster is running

// Server is running on port 3000
// Server is running on port 3000
// Server is running on port 3000
// Server is running on port 3000