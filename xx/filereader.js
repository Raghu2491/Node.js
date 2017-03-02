var fileptr=require("fs");

//var data=fileptr.readFileSync('file.txt');
// console.log(data.toString());
// console.log("Program Ended");
//utf8


fileptr.readFile('file.txt',function(err,data){
    if(err) return console.log(err);
    else return console.log(data.toString());
});


console.log("Program Ended");