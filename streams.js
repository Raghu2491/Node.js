var fs=require('fs');

var data='Hello I am Raghavendra' + '\n';

var writeStream=fs.createWriteStream('file.txt');

writeStream.write(data);

writeStream.end();

writeStream.on('finish',function () {
   console.log("Write Finished");
});

writeStream.on('error',function (err) {
   console.log(err.stack());
});

var readStream=fs.createReadStream('file.txt');
readStream.on('data',function(chunk){
   data+=chunk;
});
readStream.on('end',function () {
    console.log(data);
});
readStream.on('error',function (err) {
    console.log(err.stack()+'\n');
});

console.log("Program Ended");