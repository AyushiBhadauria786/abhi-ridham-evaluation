// Write a Program to find second smallest and second largest element in an array.


//Solution 1

const arr = [1,2,3,5,8,10,15];


function secondElement(arr){
    
    let newArr = arr.sort((a,b) => a - b);
    let secondSmall = newArr[1];
    let secondLarge = newArr[newArr.length - 2];

    console.log("small",secondSmall);
    console.log("large",secondLarge);
}

secondElement(arr);

//Solution 2

const arr2 = [10,12,25,9,30,33,55]

function secondSmall(arr){
    let min = Infinity;
    let secondMin = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            secondMin = min;
            min = arr[i];
        }else if(arr[i] < secondMin && arr[i] !== min){
            secondMin = arr[i];
        }
    }
    return secondMin;
}

function secondLarge(arr){
    let max = -Infinity;
    let secondMax = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }else if(arr[i] > secondMax && arr[i] !== max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

console.log("Second Small:",secondSmall(arr2));
console.log("Second Large:",secondLarge(arr2));


//Solution 3:

function numSmall(arr){
    const small = Math.min(...arr);
    const filterValue = arr.filter((item) => {
        return item !== small
    });
    return Math.min(...filterValue);
}


function numBig(arr){
    const max = Math.max(...arr);
    const fiterMax = arr.filter((item) => {
        return item !== max;
    })
    return Math.max(...fiterMax);
}

console.log(numSmall(arr2));
console.log(numBig(arr2));