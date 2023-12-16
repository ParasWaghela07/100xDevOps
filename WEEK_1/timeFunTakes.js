let a=0;

function Sum(n){
for(let i=1;i<n;i++){
    a=a+i;
}
return a;
}

const beforeDate=new Date();
const beforeTime=beforeDate.getTime();
Sum(10000000);

const AfterDate=new Date();
const AfterTime=AfterDate.getTime();

console.log(AfterTime-beforeTime);


// //

// function curr(){
//     console.log(new Date().getTime());
// }

// setInterval(curr,1000);
