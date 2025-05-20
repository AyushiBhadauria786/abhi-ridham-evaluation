//How Remove the first element from an array in JavaScript.

//Solution 1

let arr = [10, 50, 25, 75, 80]

let remove = arr.shift();

console.log(remove);
console.log(arr);


//Solution - 2

let arr1 = [50, 60, 70, 80];

arr1.splice(0,1);

console.log(arr1);


//Solution- 3 

const  arr2 = ["Ridham", "Abhi", "Aakash"];

const [, ...a2] = arr2
console.log(a2);


//Solution - 4

const arr3 = [15,30,45,60,75];

let copy = arr3.slice(0,1);

console.log(copy);
console.log(arr3);


