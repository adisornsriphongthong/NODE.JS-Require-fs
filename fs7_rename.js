// Import the 'fs' module to interact with the file system
const fs2 = require('fs');

// Rename the directory './new' to './newnew'
fs2.rename('./new', './newnew', (err) => {
    // Check if an error occurred during the renaming process
    if(err) throw err; // If an error occurs, throw it to stop the program and print the error

    // If the renaming is successful, print 'Complete' to the console
    console.log('Complete');
});
