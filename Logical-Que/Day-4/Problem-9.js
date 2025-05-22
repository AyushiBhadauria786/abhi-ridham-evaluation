// Check if All Elements in an Array are Equal

let arr1 = [12,34,25,23];
let arr2 = [12,12,12,12];



// Using for loop

function ArrayEqual(arr){
    for(let i = 0; i<arr.length;i++){
        if(arr[0] !== arr[i]){                       //check the condition that array staring element and another element is same 
            return false
        }
    }
    return true;
}

console.log(ArrayEqual(arr1));
console.log(ArrayEqual(arr2));



// Using Every Method

const Every1 = arr1.every((value)=>value === arr1[0]);   //check the condition that array staring element and another element is same 
console.log(Every1);

const Every2 = arr2.every((value)=>value === arr2[0]);     
console.log(Every2);


// Using Set Method

const allEqualSet1 = new Set(arr1).size === 1;   // it check set created array is 1 means all element are same;
console.log(allEqualSet1);


const allEqualSet2 = new Set(arr2).size === 1;
console.log(allEqualSet2);
