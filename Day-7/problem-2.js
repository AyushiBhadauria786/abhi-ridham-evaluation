// Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

//By checking element if it is 1 then increment counter else set counter to 0;
// store maximum from counter and max in maxi and return 

function findMaxOnes(arr){
    let cnt = 0;
    let maxi = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            cnt++
        }else {
            cnt = 0
        }

        maxi = Math.max(maxi,cnt);
    }
    return maxi;
}

const arr = [1,1,0,1,1,1];
const arr2 = [1,0,0,1,1,1,0,1,1,1,1]
console.log("Max continuous ones:",findMaxOnes(arr));
console.log(findMaxOnes(arr2));



//Solution 2

//using XOR and previous element

function maxConsecutiveOnes(arr){
    let max = 0;
    let count = 0;
    let prev = -1;

    for(let num of arr){
        if((prev ^ num) === 0){
            count++
        }else {
            max = Math.max(max,count);
            count = 1;
        }
        prev = num;
    }
    return Math.max(max, count);
}

console.log(maxConsecutiveOnes(arr));