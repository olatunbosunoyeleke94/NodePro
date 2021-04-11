var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Ola Oyeleke', function (err) {
    if (err) throw err;
    console.log('Saved!');
});