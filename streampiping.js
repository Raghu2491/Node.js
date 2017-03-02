var fs=require('fs');
var _data='';
var readStream=fs.createReadStream('file.txt');

readStream.on('data',function (data) {
    _data+=data;
});

readStream.on('end',function () {
   console.log("Read Finished");
});

var writeStream=fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

console.log("Program Ended");