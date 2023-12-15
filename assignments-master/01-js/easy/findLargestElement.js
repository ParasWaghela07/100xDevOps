/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max=numbers[0];

    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }

    return max;
}

let arr=[1,2,3,4,5,56];
let a=findLargestElement(arr);

console.log(a);