// Find the index of the first element in a sorted array that is not less than a target value(Find lower bound of array);


let arr = [1,4,8,10,13,27,21];
let target = 11;

// Native Approach


function LowerBound(arr,target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] >= target){
            return i;
        }
    }
    return arr.length;
}

console.log(LowerBound(arr,target));




// Binary Approach



function lowerBoundBinary(arr, target) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }

  console.log(lowerBoundBinary(arr,target))









  