// Import the 'fs' module to interact with the file system
const fs = require('fs');

// Append the string 'Hello World2' to the end of the file 'text.txt' in the 'files' directory
fs.appendFile('files/text.txt', "Hello World2", (err) => {
    // Check if an error occurred during the appending process
    if(err) throw err; // If an error occurs, throw it to stop the program and print the error

    // If the appending is successful, print 'appended' to the console
    console.log('appended');
})
