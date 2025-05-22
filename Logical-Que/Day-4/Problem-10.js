// Check if Array Contains a Specific Value


let arr = [12,34,23,78,93,59];


// Using for loop

function SpecificValue(arr){
    for(let i = 0; i< arr.length;i++){
        if(arr[i] === 34){
            return true;
        }
    }
    return false
}

console.log(SpecificValue(arr));



// Using Includes method


const Includes = arr.includes(78);
console.log(Includes);



// Using Find Method

const Find = arr.find((ele)=> ele === 78) !== undefined;
console.log(Find);

