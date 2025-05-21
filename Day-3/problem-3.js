//Write a Program to find the minimum value in an array in JavaScript

//Solution 1

//here we first assign min to first element of array
//then i will loop threw array and check if the element is less than min value
//so will change the min value to that element and return value.

const arr = [10,40,50,100,12,15]


function findMinValue(arr){
    let min = arr[0];
    for(let i=0; i <= arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

console.log(findMinValue(arr));



//Solution 2

//here first we initilize min with maximum value posible which is infinity
//then we loop threw array and check if array value is less than minimum 
//and store it in minimum again and return


function minVal(arr){
    let minimum = Infinity;

    for(let i=0; i<= arr.length; i++){
        if(arr[i] < minimum){
            minimum = arr[i]
        }
    }
    return minimum;
}

console.log(minVal(arr));

//Solution - 3

//first using inbuid sort method and then logging first element of array
//also we can use Math.min method

let arr2 = [1,5,6,8,2,3]


arr2.sort((a,b) => a - b);
console.log(arr2[0]);


const result = Math.min(...arr2);
console.log(result);
