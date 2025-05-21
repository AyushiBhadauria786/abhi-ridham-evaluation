// Convert Array of Numbers to a Sum


let arr = [1,2,3,4,5,6];


// using for loop 


function sumOfArr(arr){

    let sum = 0
    for(let i =0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

console.log(sumOfArr(arr));



//  for Each method 

function sum(arr){
    let sum = 0;
    arr.forEach((Number)=>{
        sum+=Number
    });
    return sum;
}

console.log(sum(arr));



// Reducer method 

const reducer = arr.reduce((acc,curr)=>{
    acc = acc+curr
    return acc;
},0)

console.log(reducer);