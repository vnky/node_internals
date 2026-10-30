const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {      
    https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {

    res.on('data', (chunk) => {
        console.log('Chunk received:', chunk.length);
    });  

    res.on('end', () => {
        console.log('HTTP Time taken:', Date.now() - start, 'ms');
    });
    }).end();
}

function doHash() {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log('Crypto HASH Time taken:', Date.now() - start, 'ms');
        });
    }

doRequest();
fs.readFile('multitask.js', 'utf8', (err, data) => {
    console.log('FS Time taken:', Date.now() - start, 'ms');
});



doHash();

//doFile();