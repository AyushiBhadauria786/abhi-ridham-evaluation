// Write a Program to remove duplicates in-place from Sorted Array.


//Solution 1

//using set we first add all array elements in set and then convert Set to array and return that. 

function removeDuplicate(arr){
    let set = new Set(arr);
    let newArr = Array.from(set);

    return newArr;
}

const dupArr = [1,1,4,4,2,2,3,3,5,5];
console.log(removeDuplicate(dupArr));


//Solution 2

//using set and spread operator

let values = [10,20,10,20,30,30,50,40,40];

let set = new Set(values);

let removedValue = [...set];
console.log(removedValue);


//Solution 3

//using forEach and includes method

let a1 = [];

values.forEach((element) =>{
    if(!a1.includes(element)){
        a1.push(element);
    }
});

console.log(a1);
