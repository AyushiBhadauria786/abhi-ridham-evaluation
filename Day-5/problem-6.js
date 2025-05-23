// Find the missing number in an array

//Solution 1
const arr1 = [1,10];

//using max and min and then push the elements that is not present in arr;

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

console.log(findMisingNum(arr1));


//Solution 2:

//using sorting

function missingValue(arr){
    arr.sort((a,b) => a -b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i + 1){
            return i + 1;
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const missingNumber = missingValue(numbers);
console.log(missingNumber);


