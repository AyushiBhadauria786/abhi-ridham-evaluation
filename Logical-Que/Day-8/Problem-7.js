// Sort an array using the quick sort algorithm.


let arr = [8,4,1,6,9,3,7,2,5];


// Using recursive method


function QuickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }
        else{
            rightArr.push(arr[i]);
        }
    }
    return [...QuickSort(leftArr),pivot,...QuickSort(rightArr)];
}


 

console.log(QuickSort(arr));