const fs = require('fs');

const data = 'Hello, World!';

fs.appendFile('example.txt', data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data has been written to file successfully.');
});

fs.unlink('example.txt',(err)=>{
    if(err){
        console.log('error in deleting')
        return
    }
    console.log('file deleted successfully!')
})