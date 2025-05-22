// Sort an array in Ascending Order


let arr = [12,3,57,87,36,23,90,16,96,27,];

// Using for loop

function Ascending(arr){
    for(let i = 0; i< arr.length - 1; i++){
        for(let j = 0; j< arr.length - 1 -i; j++){            
        if(arr[j] > arr[j+1]){                             // check the condition for element and next element
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]          // swap the value using array destructuring
        }
    }
    }
    return arr;
}

console.log(Ascending(arr));




// Using Sort Method

const Sort = arr.sort((a,b)=> a-b);                     // it change in orignal array 
console.log(Sort);
console.log(arr);


// Using toSorted Method


let arr1 = [12,78,2,34,81,29,53,75,34]
const Sorted = arr1.toSorted((a,b)=> a-b)           // it does not change orignal array
console.log(Sorted);
console.log(arr1);

