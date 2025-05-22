// Write a Program to remove duplicates in-place from Sorted Array.


//Solution 1

function removeDuplicate(arr){
    let set = new Set(arr);
    let newArr = Array.from(set);

    return newArr;
}

const dupArr = [1,1,4,4,2,2,3,3,5,5];
console.log(removeDuplicate(dupArr));