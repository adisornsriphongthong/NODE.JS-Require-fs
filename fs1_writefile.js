// Import the 'fs' module to interact with the file system
const fs = require('fs');

// Write the string 'Hello World!' to the file named 'text.txt' in the 'files' directory
fs.writeFile('files/text.txt', 'Hello World!', (err) => {
    // Check if an error occurred during the writing process
    if(err) throw err; // If an error occurs, throw it to stop the program and print the error
    // If the writing is successful, print 'writed' to the console
    console.log('writed');
})
