// Write a function that sorts an array of strings in alphabetical order.

//Solution 1

let testArr = ["Zebra", "Batman","AntMan","IronMan","Thor"];

//In this using bubble sort method and localComapre to compare letters and sort them

function strArrSort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j].localeCompare(arr[j + 1],undefined,{sensitivity: "base",}) > 0){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(strArrSort(testArr));   



//Solution 2

//using in built sort method

const strArr = ["B","C","Z","A","L"];

console.log(strArr.sort());
