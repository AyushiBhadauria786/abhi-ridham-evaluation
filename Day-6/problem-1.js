// Find the maximum difference between two numbers in an array in JavaScript?

//Solution 1;

//here using two for loop in first loop we iterate over element and in another loop we iterate over 
// next element then check for maxium diffrence of elements and then return that.

function findMaxDiff(arr){
    let maxDiff = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j] && maxDiff < (arr[j] - arr[i])){
                maxDiff = arr[j] - arr[i];
            }
        }
    }
    return maxDiff;
}

const arr = [2,3,10,6,4,8,1];
console.log(findMaxDiff(arr));
console.log(findMaxDiff([7, 9, 5, 6, 3, 2]));


//Solution 2 

//using single for loop and finding minimum element 

function maxDiffrence(arr){
    let maxDiff = -1
    let mini= arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= mini){
            mini = arr[i];
        }else{
            maxDiff = Math.max(maxDiff, arr[i] - mini);
        }
    }
    return maxDiff;
}

console.log(maxDiffrence(arr));
console.log(maxDiffrence([7, 9, 5, 6, 3, 2]));








