// Find the Intersection of Two Arrays

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];



// Using for loop

function Intersection(arr1,arr2){
    let output = [];

    for(let i = 0; i < arr1.length; i++){           // loop for array1
        for(let j = 0; j < arr2.length; j++){       // loop for array2
            if(arr1[i] === arr2[j]){                // check the condition element present in both
                output.push(arr1[i])               // push on the output
            }
        }
    }
    return output;
}

console.log(Intersection(arr1,arr2));




// Using  filter method



function IntersectionFilter(arr1,arr2){
    const output = arr1.filter((item)=>
        arr2.includes(item)        
    )
    return output;
}

console.log(IntersectionFilter(arr1,arr2));



// Using reducer method

function IntersectionReducer(arr1,arr2){
    const output = arr1.reduce((acc,curr)=>{
        if(arr2.includes(curr)){
            acc.push(curr);
        }
        return acc
    },[])
    return output;
}

console.log(IntersectionReducer(arr1,arr2))