// Sort an Array Step-by-Step Using the Bubble Sort Algorithm


let arr = [8,4,1,6,9,3,7,2,5];


// Using for loop


function BubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(BubbleSort(arr));




// Using for loop and ES6  Destructuring 



function BubbleSortDestructuring(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(BubbleSortDestructuring(arr))