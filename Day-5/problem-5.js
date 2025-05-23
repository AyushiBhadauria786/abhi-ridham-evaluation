//Implement a function that merges two arrays into a single array, alternating elements from each array.


//Solution 1

function mergeAltArray(arr1,arr2){
    let value = 0;
    let first = 0;
    let second = 0;
    let mergeArr = [];
    while(value < arr1.length + arr2.length){
        if(first > second){
            mergeArr[value] = arr2[second]
            second++;
        }else {
            mergeArr[value] = arr1[first];
            first++;    
        }
        value++;
    }
    return mergeArr;
}

const arr1 = [34, 21, 2, 56, 17];
const arr2 = [12, 86, 1, 54, 28];

console.log(mergeAltArray(arr1,arr2));



//Solution 2


let arr3 = [1,3,5,7,9];
let arr4 = [2,4,6,8,10];


function mergeArrays(a1,a2){
    const mergeArr = [];
    const maxlength = Math.max(a1.length,a2.length);
    for(let i = 0; i < maxlength; i++){
        if(i < a1.length){
            mergeArr.push(a1[i]);   
        }
        if(i < a2.length){
            mergeArr.push(a2[i]);
        }
    }
    return mergeArr;
}

console.log(mergeArrays(arr3,arr4));


