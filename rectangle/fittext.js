 'use strict'
  const fs = require('fs');
  var rawdata=fs.readFileSync('char1.json');
  var char1=JSON.parse(rawdata);
  var readable=fs.createReadStream("par.txt",
  
{
  encoding:'utf8',
  fd:null,
});
/*var sum;
if(sum==298)
{
var chars = str.split('');
console.log(chars[sum]);
}*/
readable.on('readable',function()
{
  var chunk;
  while(null!==(chunk=readable.read(10)))
  {
    console.log(chunk);
  }
});

