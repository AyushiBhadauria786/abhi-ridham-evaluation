// Recursively applying object freezing to all nested properties and sub-objects(Recursive object freezing);



// Using Recursive Deep Freeze with for in 

const myObject = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
};


function DeepFreeze(object){
    for(const key in object){
        if(typeof object[key] === 'object' && object[key] !== null){
            DeepFreeze(object[key]);
        }
    }
    return Object.freeze(object);
}

DeepFreeze(myObject);
console.log(myObject);


myObject.a = 10;
console.log(myObject);        // no changes

myObject.b.c = 20;
console.log(myObject);





// Using Object.keys() and for Each Method

const obj = {
    a : 3,
    b : 4,
    c : {
        d:5,
        e:6
    }
}

function DeepFreezeObjectKeys(object){
    Object.keys(object).forEach((key)=>{
        if(typeof object[key] === 'object' && object[key] !== null){
            DeepFreezeObjectKeys(object[key]);
        }
    })
    return Object.freeze(object);
}

DeepFreezeObjectKeys(obj);
console.log(obj);


obj.a = 12;
console.log(obj);        // no changes

obj.c.d = 23;
console.log(obj);