// Write a Program to sort an array in Ascending Order in JavaScript.


//Solution 1

//here i am using two loops and comparing element, if i is less then j So swapping the values using 
//temp variable and returning array

const arr = [50,40,30,20,10,0];

function sortArr(arr){
    for(let i=0; i<=arr.length; i++){
        for(let j=0; j < i; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArr(arr));


//Solution-2

//here using inbuid method and comaparing using arrow function.

const arr2 = [5,4,3,2,1];
arr2.sort((a,b) => a - b);
console.log(arr2);


