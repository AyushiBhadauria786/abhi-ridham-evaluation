// You are given a sorted array of integers and a target, 
// your task is to search for the target in the given array. 
// Assume the given array does not contain any duplicate numbers.

//Using binary search algorithm. 


const arr = [3,4,6,7,9,12,16,17];
const findValue = 6

function binarySearch(arr,target){
   let n = arr.length;
   let low = 0;
   let high = n - 1;

   while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === target){
        return mid
    }else if(target > arr[mid]){
        low = mid + 1;
    }else{
        high = mid - 1;
    }
   }
   return -1;
}

console.log("The element is present at position:",binarySearch(arr,findValue));
