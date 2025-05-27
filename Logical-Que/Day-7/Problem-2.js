// Find the index of the first element in a sorted array that is greater than a target value(Find upper bound in array)



let arr = [1,4,8,10,11,13,27,21];
let target = 11;


// Native Approach


function UpperBound(arr,target){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > target){
            return i;
        }
    }
    return arr.length;
}

console.log(UpperBound(arr,target));



// Binary Approach


function UpperBoundBinary(arr,target){
    let low = 0;
    let high = arr.length;

    while(low < high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return right
}


console.log(UpperBound(arr,target));



// Using for of 

function upperBoundForOf(arr, target) {
    let index = 0;
    for (const element of arr) {
      if (element > target) {
        return index;
      }
      index++;
    }
    return arr.length;
  }

console.log(upperBoundForOf(arr,target));