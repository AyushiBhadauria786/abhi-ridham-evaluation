// Retrieving all keys including those from deeply nested objects within the main object structure(Get All Keys from Nested Object)


const myObject = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
}




// Using Recursive Approach

function GetKeys(object,keys = []){
    
    for(let key in object){
        keys.push(key);
        if(typeof object[key] === 'object' && object[key] !== null){
            GetKeys(object[key],keys)
        }
    }
    return keys
}

console.log(GetKeys(myObject));





// Using Object.keys() Method


function GetKeysObj(object){
    let keys = [];

    for(const key of Object.keys(object)){
        keys.push(key);
        if(typeof object[key] === 'object' && object[key] !== null){
            keys = keys.concat(GetKeysObj(object[key]))
        }
    }
    return keys
}


console.log(GetKeysObj(myObject));


