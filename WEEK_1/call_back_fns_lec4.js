//HERE WE HAVE TO WRITE SAME CODE FOR SQUARE AS WELL AS FOR CUBE IE SumOfSquare and SumOfCubes --> their work is exactly same just calling their respective fns // SO WE CAN REPLACE IT BY CALL-BACKS

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function SumOfSquare(a,b){
    let val1=square(a);
    let val2=square(b);

    return val1 + val2;

}

function SumOfCubes(a,b){
    let val1=cube(a);
    let val2=cube(b);

    return val1 + val2;

}

const ans1=SumOfSquare(1,2);
const ans2=SumOfCubes(1,2);

console.log(ans1);
console.log(ans2);


////////////////////////////////////////

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function SumOfSomething(a,b,fn){
    let val1=fn(a);
    let val2=fn(b);

    return val1 + val2;

}

const ans1=SumOfSomething(1,2,square);
const ans2=SumOfSomething(1,2,cube);

console.log(ans1);
console.log(ans2);



////////////////////
//ANONYMOUS FUNCTION

//NOT DEFINING FN ANYWHERE AND PASSING THE WHOLE FN AS ARGUMENT IN ANOTHER FN

const res=SumOfSomething(2,5,function(n){
    return n*n;
});





