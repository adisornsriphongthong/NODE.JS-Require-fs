const fs = require('fs');

// Attempt to remove the directory named 'node'
fs.rmdir('./node', (err) => {
    // Check if there is an error during the directory removal
    if(err) throw err; // If an error occurs, throw the error
    // If the directory removal is successful, you can perform any additional operations here
});
