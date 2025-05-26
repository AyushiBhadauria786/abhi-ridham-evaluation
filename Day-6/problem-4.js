// Given an array of N integers, left rotate the array by one place.

const arr = [1,2,3,4,5,6];


//first we store the first element to temp then we will shift all elements by one and at last
// we assign temp to the last element of arr.

//Solution 1

function leftRotate(arr){
    let temp = arr[0];
    let n = arr.length

    for(let i = 1; i < n; i++){
        arr[i - 1] = arr[i];
    }
    arr[n-1] = temp
    return arr;
}

console.log(leftRotate(arr));


//Solution 2

//using shift and then pusing it to last

let arr2 = [2,3,4,5,6];

function rotateByOne(arr){
    const first = arr.shift();
    arr.push(first);
    return arr
}

console.log(rotateByOne(arr2));