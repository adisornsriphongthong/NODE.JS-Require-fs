// Import the 'fs' module to interact with the file system
const fs = require('fs');

// Read the contents of the file 'text.txt' located in the 'files' directory
fs.readFile('files/text.txt', (err, data) => {
    // Check if an error occurred during the reading process
    if(err) throw err; // If an error occurs, throw it to stop the program and print the error

    // Convert the data from binary to a human-readable string
    let value = data.toString();

    // Print the contents of the file to the console
    console.log(value);
})
