//Syncgronous functions --> normal fns that perform task line by line , one ata time

//Asynchronous fns --> calls others to take control on itelf for certain period and main thread proceed with further code and after the calls come back then that fn executes

// function print(){
//     console.log("Hello");
// }

// setTimeout(print,1000); //Asynchronous fn // holds for 1sec and flow proceed ahead
// console.log("World");

///////////////////////////////////
const { promises } = require("dns");
const fs=require("fs");
//filesystem module

fs.readFile("a.txt","utf-8",function(err,data){ //Async fn
    console.log(data);
})

console.log("hi there"); // this executes 1st than above fn
let a=0;
for(let i=0;i<100000000;i++){
    a++;
}
console.log("hi there 2");// this will runs after above hi there // asyn fn executed at last




/////////////////////////////////// ASYNC FNS
console.log("hii");

setTimeout(function(){
    console.log("fron fn1"); //20sec waits ,flow goes ahead , then get executed,if after 20sec the loop is running thrn it waits till loop stops
},20000);

setTimeout(function(){
    console.log("fron fn2"); //10sec waits ,,flow goes ahead ,then get executed ,if after 10sec the loop is running thrn it waits till loop stops
},10000);

let index=0;
for(let i=0;i<10;i++){ 
    index++;
}
console.log(index);

////////////////////// UGLY WAY TO CREATE OWN ASYNC FN'S

const fs=require('fs');

//my own async fn
function ParasFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}

//callback fn
function onDone(data){
    console.log(data);
}

ParasFile(onDone);


/////////////////////// PROMISES , BETTER WAY TO CREATE OWN ASYN FN
const fs=require('fs');

//own async fn
function ParasReadFile(){
    return new promise(function(resolve){
        fs.readFile("a.txt","utf-80",function(err,data){
            resolve(data);
        });
    })
}

//callback fn
function onDone(data){
    console.log(data);
}

ParasReadFile().then(onDone);

//OR
var x=ParasReadFile();
x.then(onDone);








