// Remove the nth element from the end of an array.


let arr = [1,2,3,4,5,6];
let n = 2;


// Using for loop


function RemoveNthElementFromEnd(arr,n){
    let result = [];
    const RemoveIndex = arr.length - n;
    
    for(let i = 0; i<arr.length; i++){
        if(i !== RemoveIndex){
            result.push(arr[i]);
        }
    }
    return result;
}


console.log(RemoveNthElementFromEnd(arr,n))




// Using Slice Method

function RemoveNthElementFromEndSlice(arr,n){
    const output = arr.slice(0,arr.length - n).concat(arr.slice(arr.length - n + 1 ));
    return output;
}

console.log(RemoveNthElementFromEndSlice(arr,n));


// Using Splice Method

function RemoveNthElementFromEndSplice(arr,n){
    arr.splice(arr.length - n, 1);
    return arr;
}

console.log(RemoveNthElementFromEndSplice(arr,n));