// Write a Program to Implement Selection sort in JavaScript.

function selectionSort(arr){
    let mini;

    for(let i = 1; i < arr.length; i++){
        mini = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[mini]){
                mini = j
            }
        }
        if(mini != i){
            [arr[i],arr[mini]] = [arr[mini],arr[i]]
        }
    }
    return arr;
}

const arr = [1,5,7,2,4,3,6]
console.log(selectionSort(arr));