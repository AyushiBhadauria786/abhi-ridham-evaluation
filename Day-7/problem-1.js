// Given an array of integers, rotating array of elements by k elements either left or right.

//Applying three loops and temp variable.

function rotateArr(arr,d){
    n = arr.length;
    d = d % n;
    let temp = [];

    for(let i = 0; i < d; i++){
        temp[i] = arr[i];
    }

    for(let i = d; i < n; i++){
        arr[i - d] = arr[i]
    }

    for(let i = n - d; i < n; i++){
        arr[i] = temp[i - (n - d)];
    }

    return arr;
}

const arr = [1,2,3,4,5,6]
let d = 3;

console.log(rotateArr(arr,d));


//Solution 2

//using recursive method

function arrRotate(arr,k){
    let n = arr.length;
    if(k === 0){
        return;
    }

    let temp = arr[n - 1];
    for(let i = n - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    
    arrRotate(arr, k - 1);
    return arr;
}

const arr2 = [1,3,5,7,9];
const k = 2;

console.log(arrRotate(arr2,k));
