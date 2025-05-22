//How to compare two objects to determine the first object contains equivalent 
// property values to the second object in JavaScript ?


//Solution 1

const obj1 = {
        name: "Ridham",
        age: 22
    }
    
const obj2 = {
        name: "Dhaval",
        age: 20
    }


function checkObj(object1, object2){
    for(key in object2){
        if(object1[key] !== object2[key]){
            return false
        }
    }
    return true;    
}
    
console.log(checkObj(obj1,obj2));


//Solution 2

const obj3 = {
    name: "Aakash",
    age: 22
}

const obj4 = {
    name: "Aakash",
    age: 22
}

function equalCheck(obj1,obj2){
    let stringify1 = JSON.stringify(obj1);
    let stringify2 = JSON.stringify(obj2);
    return stringify1 === stringify2;
}

console.log(equalCheck(obj3,obj4));


