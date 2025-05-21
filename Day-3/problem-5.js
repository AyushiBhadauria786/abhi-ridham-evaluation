// Remove Specific elements from the left of given array of elements in JavaScript.


//Solution 1 

//here we use Inbuild splice method to remove element
const arr = [1,2,3,6,5];
arr.splice(0,1);

console.log(arr);




//Solution - 2

//If we have to remove from left we can use shift method also
const arr2 = [5,1,2,3,4];
arr2.shift();
console.log(arr2);


//Solution 3

//here this function takes the number that we want to remove from arr if it exists in array.
 
let arr3 = [3,4,5,6,7]
function removeIndex(n){
    let index = arr3.indexOf(n)

    if(index !== -1){
        arr3.splice(index,1);
    }

    console.log(arr3)
}

removeIndex(3);