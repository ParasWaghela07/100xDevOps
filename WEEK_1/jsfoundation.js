//VAR , LET , CONST

let firstName="Paras";
let lastName="Waghela";
let IsMarried=true;

console.log("Hello "+firstName+" "+lastName);

let gender="FeMale";

if(gender=="Male"){
  console.log("Hello Sir ");
}
else{
  console.log("Hello mam ");
}

if(IsMarried){
  console.log("Married");
}
else{
  console.log("Not Married");
}

let count=0;
for(let i=0;i<1001;i++){
  count+=i;
}

console.log(count);

//ARRAY

let arr1=["Paras","Dinesh","Waghela"];
console.log(arr1[2]);
const ages=[9,2,3,4,5,6];

//EVEN NUMS

for(let i=0;i<ages.length;i++){
  if(ages[i]%2==0){
    console.log(ages[i]);
  }
}

//MAX ELEMENT

let Max=ages[0];

for(let i=1;i<ages.length;i++){
  if(ages[i]>Max){
    Max=ages[i];
  }
}

console.log(Max);

//REVERSE ARRAY
let arr=[1,2,3,4,5];
let i=0;
let j=arr.length-1;

console.log("Before : ");
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

while(i<=j){
  let temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
  i++;
  j--;
}

console.log("after");

for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

//OBJECTS

const user1={
  firstName:"Paras",
  gender:"male"
}

console.log(user1["firstName"]);

// infinite nesting of objects
const alluser=[{
  firstName:"Paras",
    gender:"male"
},
               {
                 firstName:"Abhi",
                   gender:"male"
               },
               {
                 firstName:"Nihar",
                   gender:"female"
               }]

for(let i=0;i<alluser.length;i++){
  if(alluser[i]["gender"]=="male"){
    console.log(alluser[i]["firstName"]);
  }
}

//FUNCTIONS

function findSum(a,b){
  return a+b;
}

console.log(findSum(5,6));

function Pretty(a) {
  console.log(a + " is sharpshooter");
  return;
}
Pretty("colt");

function greet() {
  console.log("Hello !");
}

setTimeout(greet, 3 * 1000);

'IS SAME AS'
      |
      V

function setTimeout(fn,duration){
sleep(duration);
  fn();
}

setInterval(greet, 3 * 1000);


//30 TO 0 COUNTER

let counter = 3;

function countdown() {
  if (counter >= 0) {
    console.log(counter);
    counter--;
  } else {
    clearInterval(timer);
  }
}

let timer =setInterval(countdown, 1000); // Runs countdown function every 1000ms (1 second)



//Terminal Clock
function updateClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    // Clear the console (works in Node.js or browser console)
    console.clear();
  
    // Output the time in HH:MM:SS format
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  
  