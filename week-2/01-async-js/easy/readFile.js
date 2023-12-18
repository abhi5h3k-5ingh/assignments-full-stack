// Read a file in javascript

const fs = require('fs');

const filePath = 'a.txt';

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }

  // Print the file contents
  console.log('File Contents:', data);
});