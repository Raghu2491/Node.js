var fs=require('fs');
var zlib=require('zlib');

fs.createReadStream('file.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('file.txt.gz'));

fs.createReadStream('file.txt.gz')
    //.pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('unzippedFile.txt'));

console.log("Program Ended");

