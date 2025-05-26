// Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

//Solution 1

function upperBound(arr,x){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > x){
            return i
        }
    }
}

const arr = [3,4,8,9,15,19];
let target = 9;

console.log("upperBound index is:",upperBound(arr,target));


//Solution 2

function findUpperBound(arr,n,target){
    let lo = 0;
    let hi = n - 1;
    let res = n;

    while(lo <= hi){
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] > target){
            res = mid;
            hi = mid - 1;
        }else {
            lo = mid + 1
        }
    }
    return res;
}

let num = 6;
 console.log(findUpperBound(arr,num,target));