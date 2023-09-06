const fs = require("fs");

fs.readFile('./oth.txt', 'utf8', function(err, data) {
    console.log(data);
});