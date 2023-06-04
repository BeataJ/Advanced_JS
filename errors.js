const fs = require('fs');

function readFile() {
    const fileData = fs.readFile('data.json');
    console.log('Hi there!');
}

readFile();