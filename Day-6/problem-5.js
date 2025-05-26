// Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

//using Set 

function unionArr(arr1,arr2){
    let set = new Set();
    let union = []

    for(let num of arr1){
        set.add(num);
    }

    for(let num of arr2){
        set.add(num)
    }

    for(let num of set){
        union.push(num)
    }

    return union
}

console.log(unionArr(arr1,arr2));


//Solution 2

//using two for loops and sort method


function arrUnion(arr1, arr2){
    let ans = [];

    for(let i = 0; i < arr1.length; i++){
        if(!ans.includes(arr1[i])){
            ans.push(arr1[i]);
        }
    }

    for(let i = 0; i < arr2.length; i++){
        if(!ans.includes(arr2[i])){
            ans.push(arr2[i]);
        }
    }

    ans.sort((a,b) => a - b);
    return ans;
}

let a1 = [55,33,22,11,44,88];
let a2 = [11,77,66,99,88,55];

console.log(arrUnion(a1,a2));


