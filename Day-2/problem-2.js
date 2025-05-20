// Find the largest number in an array in JavaScript.

//Solution-1

let arr1 = [10, 20, 120, 50, 80, 105, 115];

function largestNum(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(largestNum(arr1));


//Solution-2

let result = arr1.sort((a,b) => {
    return a - b;
});

console.log(result);
console.log(result[result.length - 1]);


//Solution - 3

function findLargest(arr){
    return Math.max(...arr);
}

console.log("using Math function-",findLargest(arr1));


//Solution - 4 

function largestElement(arr){
    return  arr.reduce((largest,current) => 
        (current > largest ? current : largest),arr[0]);
}

console.log(largestElement(arr1));



