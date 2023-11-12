const fs = require('fs');

const readStream = fs.createReadStream('./newnew/index.html');
const writeStream = fs.createWriteStream('./newnew/newindex.html');

readStream.on('data', (data) => {
  console.log(data.toString());
});

readStream.pipe(writeStream);
