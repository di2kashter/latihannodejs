const fs = require('fs');

const fileName = 'file.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('terjadi error saat membaca file : ', err);
        return;
    }
    console.log(data);
})