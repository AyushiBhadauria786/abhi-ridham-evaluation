// Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

//The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key.
//The lower bound is the smallest index, ind, where arr[ind] >= target. 
//But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.


function findLowerBound(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= target){
            return i
        }
    }
}


let arr = [3,5,8,15,19];
let target = 6;

console.log("Lower bound index:",findLowerBound(arr,target));


//Solution 2:

function lowerBound(arr,n,target){
    let result = n
    let low = 0; let high = n - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[mid] >= target){
            result = mid
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return result;
}

let n = 5; 
let x = 6;

console.log(lowerBound(arr,n,x));