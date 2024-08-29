const fs = require('fs');

// Asynchronous readFile with a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('This will run before reading the file completes');
