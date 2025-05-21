// Merge Two Arrays Without Duplicates


let arr1 = [23,45,87,67,12];
let arr2 = [12,2,3,45,5,6,23,2,1,5,];


// Using for loop 

function mergeArraysUnique(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {        // it check the element exist in first array
        arr1.push(arr2[i]);
      }
    }
    return arr1;
  }
console.log(mergeArraysUnique(arr1,arr2));


// Using spread and set operator

function MergeArray1(arr1,arr2){
    return  [...new Set([...arr1,...arr2])];
}

console.log(MergeArray1(arr1,arr2));



// Using Concat and set operator


function MergeArray2(arr1,arr2){
    const output = arr1.concat(arr2);
    return [...new Set(output)];
}

console.log(MergeArray2(arr1,arr2));