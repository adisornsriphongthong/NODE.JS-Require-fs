// Import the 'fs' module to interact with the file system
const fs = require('fs');

// Create a new directory named 'new' in the current working directory
fs.mkdir('./new', (err) => {
    // Check if an error occurred during the directory creation process
    if(err) throw err; // If an error occurs, throw it to stop the program and print the error

    // If the directory creation is successful, print 'Completed' to the console
    console.log('Completed');
})
