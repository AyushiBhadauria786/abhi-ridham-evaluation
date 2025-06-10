// Create a function that takes an array and a callback function. 
// The function should apply the callback to each element of the array and return a new array 
// containing the results.

//Solution 1

//In this first we check for array and function input if it is ok then we run a loop and push value in result 
// arr.

function applyCallbackToArr(arr, callback){
    if(!Array.isArray(arr)){
        throw new Error("Only Array's are allowed")
    }
    if(typeof callback !== 'function'){
        throw new Error("Second value must be a function");
    }

    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr));
    }
    return result
}

const numbers = [1,2,3,4,5,6];

const doubleNumbers = applyCallbackToArr(numbers, (number) => number * 2);
console.log(doubleNumbers);

const letters = ["a","b","c","d"]

const upperStr = applyCallbackToArr(letters, (letter) => letter.toUpperCase());
console.log(upperStr);


//Solution 2:


//In this we used map method and used on argument array and passed callback as it's callback so it will
// apply the callback on each element and returns new array.

function applyCallback(arr,callback){
    return arr.map(callback);
}

const squareNumbers = applyCallback(numbers,num => num * num);
console.log(squareNumbers);

const upperLetters = ["E","F","G","H"];
const lowerStr = applyCallback(upperLetters, (letter) => letter.toLowerCase());
console.log(lowerStr);



