// Constructing a JavaScript object by pairing elements from two separate arrays as keys and values respectively(Create Object from Two Arrays)


// using for loop 


let arr1 = ["name","age","city"];
let arr2 = ["abhi",21,"junagadh"];


function CreateObject(arr1,arr2){
    const obj = {};
    for(let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = arr2[i]
    }
    return obj;
}

console.log(CreateObject(arr1,arr2));



// Using Reducer Method


function CreateObjectReduce(arr1,arr2){
    const Obj = arr1.reduce((acc,key,index,) =>{
        acc[key] = arr2[index];
        return acc;
    },{});
    return Obj
}


console.log(CreateObjectReduce(arr1,arr2));



// Using Object Assign and map

function CreateObjectAssign(arr1,arr2){

    const output = Object.assign({},...arr1.map((key,index)=>({
        [key] : arr2[index]
    })))
    return output;
}

console.log(CreateObjectAssign(arr1,arr2));