const https = require('https');

const start = Date.now();

function doRequest() {      
    https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {

    res.on('data', (chunk) => {
        console.log('Chunk received:', chunk.length);
    });  

    res.on('end', () => {
        console.log('Time taken:', Date.now() - start, 'ms');
    });
    }).end();
}

    doRequest();
    doRequest();
    doRequest();
    doRequest();
    doRequest();
    doRequest();
// # Lets understand how handles the async code in node.js
console.log('Request sent');