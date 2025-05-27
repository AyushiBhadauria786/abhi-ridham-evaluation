// Find how many times the array has been rotated.

//here we will first check for minimum element and after finding it we will store index of that
// and the minimum element index is our rotation count.

function rotationCount(arr){
    let min = arr[0];
    let min_index = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            min_index = i;
        }

    }
    return min_index;
}

const arr = [7,9,11,12,5];
console.log(rotationCount(arr));


//Solution 2

//here we are using binary search method 

function findRotation(arr){
    let low = 0;
    let high = arr.length - 1;
    let ans = Infinity;
    let index = -1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[low] <= arr[high]){
            if(arr[low] < ans){
                index = low;
                ans = arr[low]
            }
            break;
        }

        if(arr[low] <= arr[mid]) {
            if(arr[low] < ans) {
                index = low;
                ans = arr[low];
            }
            low = mid + 1
        }else{
            if(arr[mid] < ans){
                index = mid;
                ans = ans[mid]
            }
            high = mid - 1;
        }
    }
    return index;
}

const arr2 = [4,5,6,1,2,3];
console.log(findRotation(arr2));
