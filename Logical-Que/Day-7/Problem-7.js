// Find the missing number in a sequence of consecutive integers.

let arr = [1,5,2,3,8,6,7];


// Using the Mathematical Approach

function FindMissingNum(arr){
    const n = arr.length + 1;
    const ExpectedSum = (n*(n+1)) / 2;
 

    const sum = arr.reduce((sum,num) => sum + num, 0);
    return ExpectedSum - sum;

}

console.log(FindMissingNum(arr));


// Using max and min


let arr3 = [1,4,6,9,13,20];

function findMisingNum(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let missingValue = [];
    for(let i = min; i <= max; i++){
        if(!arr.includes(i)){
            missingValue.push(i);
        }
    }
    return missingValue;
}

console.log(findMisingNum(arr3));



// Using Sort Method


const arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function findMisingNumSort(arr2){
    let sort = arr2.sort((a,b)=>a-b);

    for(let i = 0; i< arr2.length; i++){
        if(arr2[i] !== i+1){
            return i + 1;
        }
    }
    return arr2.length + 1;
}

console.log(findMisingNumSort(arr2));
