// Import the 'fs' module promises API to perform file operations asynchronously
const fsPromises = require('fs').promises;

// Define an asynchronous function 'fileOps' using the 'async' keyword
const fileOps = async () => {
    try {
        // Read the contents of the file 'text.txt' from the 'files' directory using 'utf-8' encoding
        const data = await fsPromises.readFile('files/text.txt', 'utf-8');

        // Overwrite the contents of the file 'text.txt' with the data that was read
        await fsPromises.writeFile('files/text.txt', data);

        // Append the same data at the end of the file 'text.txt'
        await fsPromises.appendFile('files/text.txt', data);

        // Print the data to the console
        console.log(data);
    } catch (error) {
        // If an error occurs during the file operations, log the error to the console
        console.error(error);
    }
}

// Call the 'fileOps' function to execute the file operations
fileOps();const fs = require('fs');

console.log(fs.existsSync('./newnew'));// check that is it has that folder.
