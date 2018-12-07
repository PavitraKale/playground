
var command = require('yargs').argv;
var fs=require('fs');
if(command.cmd==="save")
{
    fs.writeFile("text.txt", command.write,function(err){
        if(err)throw err;
        console.log('saved');
    });
}