// Deep clone an object with nested arrays and objects without using structuredClone or lodash.

const originalObject = {
    name: "Ridham",
    age: 22,
    address: {
        city: "Jamnagar",
        street: "Nirmal-nagar" 
    },
    hobbies: ['reading','traveling']
}

//Solution 1

//Using Json.parse and Json.stringify methods

const cloneObj = JSON.parse(JSON.stringify(originalObject));
cloneObj.name = "Priyesh";
cloneObj.address.city = "Ahmedabad";


console.log("Original:",originalObject);
console.log("Cloned:",cloneObj);


//Solution 2

//Using recursive function 

const newObject = {
    name: "Krish",
    age: 30,
    address: {
        city: "Jaipur",
        street: "pink city" 
    },
    hobbies: ['flying','traveling']
}

function deepClone(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.map(deepClone);
    }

    const cloneObj = {};
    for(const key in obj){
        if(Object.hasOwnProperty.call(obj,key)){
            cloneObj[key] = deepClone(obj[key])
        }
    }
    return cloneObj;
}

const newClone = deepClone(newObject);
newClone.hobbies = ['Reading','Swiming'];
newClone.name = "Harry";
newClone.age = 18;

newObject.age = 25;

console.log("new original",newObject);
console.log("new cloned",newClone);