// Remove Falsy Values from Array


let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

// Using for loop

function RemoveFalsyValue(arr){
    let output = [];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i]){                                   // check the condition true or false
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(RemoveFalsyValue(arr));


// Using for each 

function removeFalsy(arr){
    let output = [];

    arr.forEach((item)=>{
        if(item){
            output.push(item);
        }
    });
    return output;
}

console.log(removeFalsy(arr));



// Using For of

function ForOfRemoveFalsy(arr){
    let output = [];
    for(x of arr) {
        if(x){
            output.push(x);
        }
    }
    return output;
}

console.log(ForOfRemoveFalsy(arr));



// Using filter method

const output = arr.filter((item)=>{
    if(item){
        return item;
    }
})

console.log(output);



const OutPut = arr.filter(Boolean);
console.log(OutPut);