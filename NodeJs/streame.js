const { Readable } = require('stream');
const fs = require('fs')
const filePath = 'numbers.csv';

// Create a readable stream
const readStream = new Readable({
  read(size) {
    // Read data from the file and push it into the stream
    const data = fs.readFileSync(filePath, { encoding: 'utf8', start: this.bytesRead, end: this.bytesRead + size });
    this.push(data);
    this.bytesRead += data.length;

    // If we've read 50 chunks, push null to indicate end of data
    if (this.chunkCount >= 50) {
      this.push(null);
    }
  }
});

readStream.bytesRead = 0;
readStream.chunkCount = 0;

// Listen for the 'data' event, which is emitted when new data is available to read
readStream.on('data', (chunk) => {
  // Process the data chunk
  console.log('Received chunk:', chunk.toString());

  // Increment the chunk count
  readStream.chunkCount++;
});

// Listen for the 'end' event, which is emitted when there is no more data to read
readStream.on('end', () => {
  console.log('End of file.');
});

// Listen for 'error' event in case of any errors
readStream.on('error', (err) => {
  console.error('Error:', err);
});
