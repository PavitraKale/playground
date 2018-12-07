var fs = require('fs');
var width=300;
var height=600;
fs.readFile('par.txt', 'utf8' ,function(err, contents) {
    
    console.log(contents);
});