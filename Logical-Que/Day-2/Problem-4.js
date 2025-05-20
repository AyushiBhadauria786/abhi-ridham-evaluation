// Flatten a Nested Array


// recursion with reduce() and concat()


let arr = [1,2,3,[4,5],[6,7,8]];

function FlattenArray(arr){
    return arr.reduce((acc,curr) => {
        return Array.isArray(curr) ? acc.concat(FlattenArray(curr)) : acc.concat(curr);
    },[])
}



console.log(FlattenArray(arr));


// Using the flat() method


let arr2 = [1,2,3,[4,5],[6,7,8]];

const Flat = arr2.flat(Infinity);
console.log(Flat);



//  Using Spread syntax

// it only works for one level of nesting.

const arr3 = [[1, 2], [3, 4]];
const flattenedArr = [].concat(...arr3);
console.log(flattenedArr); 


// Using the reduce() and concat() methods

// it also not suitable for deeply nested arrays


let arr4 = [1, [2, 3], 4, [5, 6], 7];
let flatArray = arr4.reduce((acc, value) => acc.concat(value), []);
console.log(flatArray); 