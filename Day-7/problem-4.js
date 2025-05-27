// Write a Program to Implement Bubble sort in JavaScript.

//Solution 1

//Simple bubble sort with two loop and temp variable for swapping


function bubbleSort(arr){
    let temp = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - 1 - i); j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [1,4,2,5,-2,3]
console.log(bubbleSort(arr));


//Solution 2

//Optimized version by adding condition so checked for if array is already sorted

function bubbleSortAlgo(arr){
    let temp = [];
    let flag;

    for(let i = 0; i < arr.length; i++){
        flag = false
        for(let j = 0; j < (arr.length - 1 - i); j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}

const arr2 = [0,-1,5,8,7,4,3]
console.log(bubbleSortAlgo(arr2));
