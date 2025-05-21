// Check if Array is Sorted


// using for loop

let arr = [12,2,3,87,23,16];
let arr1 = [1,2,3,4,5];

function ArraySorted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){                // check the condition next element is bigger then previous
            return false;
        }
    }
    return true;
}


console.log(ArraySorted(arr));
console.log(ArraySorted(arr1));



// every method


function isSorted(arr) {
    return arr.every((element, index) => index === 0 || element >= arr[index - 1]);     // here check the condition and every return true or false value 
}

console.log(isSorted(arr))
console.log(isSorted(arr1))


// sort method

function checkSorted(arr) {
    const sortArr = [...arr].sort((a, b) => a - b);
    return sortArr.join(',') === arr.join(',');            // compare with sorted array
}


console.log(checkSorted(arr));
console.log(checkSorted(arr1));

