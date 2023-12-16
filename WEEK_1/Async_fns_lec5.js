//Syncgronous functions --> normal fns that perform task line by line , one ata time

//Asynchronous fns --> calls others to take control on itelf for certain period and main thread proceed with further code and after the calls come back then that fn executes

// function print(){
//     console.log("Hello");
// }

// setTimeout(print,1000); //Asynchronous fn // holds for 1sec and flow proceed ahead
// console.log("World");

///////////////////////////////////
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
console.log("hi there 2");
