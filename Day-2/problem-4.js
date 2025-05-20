//Write a Program to find a sum of an array.

//Solution 1

let arr = [1, 2, 3, 4, 5];

function arraySum(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

arraySum(arr);


//Solution 2 

function sumOfArr(arr){
    let total = 0 
    let i = 0

    while(i < arr.length){
        total += arr[i];
        i++;
    }
    return total;
}

console.log("while loop-",sumOfArr(arr));


//Solution - 3

let sumOfArray = arr.reduce((current,accumlator) => {
       return current += accumlator;
},0)

console.log("reduce-",sumOfArray);

 

//Solution - 4

function usingForEach(arr){
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum; 
}

console.log("forEach-",usingForEach(arr));

