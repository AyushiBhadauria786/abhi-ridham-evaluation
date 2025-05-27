// Locate the target element’s index in a sorted integer array using binary search.(Find target element in given integer array (binary search))


const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;



function BinarySearchArr(arr,target){
    let low = 0;
    let high = arr.length - 1;

    while (low <= high){
        const mid = Math.floor((low + high) / 2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return low;
}

console.log(BinarySearchArr(arr,target));