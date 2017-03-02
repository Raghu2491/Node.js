var fs=require('fs');
var os=require('os');
console.log("contents of file before manipulation \n");

console.log(fs.readFileSync('file.txt').toString() + "\n");

fs.open('file.txt','w+',function (err,data) {
   if(err) console.log(err.stack());
    else {
       fs.writeFile('file.txt', '/////THIS IS JUNK..!', function (err) {
           if (err) return console.log(err.stack());
           else {
               console.log("Data Written Successfully..!")
               fs.readFile('file.txt', function (err, data) {
                   if (err) return console.log(err.stack());
                   else {
                       console.log("Data From The file after Over Writing its Contents");
                       console.log(data.toString());
                   }
               });
           }
       });
   }
});