var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

r.on('line', function (line) {
    var vals = line.split(" ");
    console.log(parseInt(vals[0])+parseInt(vals[1]));
});