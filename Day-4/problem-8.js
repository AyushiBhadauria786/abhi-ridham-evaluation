// Remove Array Element Based on Object Property in JavaScript.

const newObject = [
    {
        id: 1,
        name: "Ridham",
        language: "JavaScript"
    },
    {
        id: 2,
        name: "Abhi",
        language: "JavaScript"

    },
    {
        id: 3,
        name: "Aakash",
        language: "Java"

    }
]

const filterVal = newObject.filter(item => item.language !== "Java");
console.log(filterVal);


//Solution 2

const id = 2;
const index = newObject.findIndex(element => element.id === id);

if(index !== -1){
    newObject.splice(index,1);
}

console.log(newObject);


// Solution - 3

let arr = [
    {
        name: "Ridham",
        age: 22
    },
    {
        name: "Dhaval",
        age: 20
    },
    {
        name: "Raj",
        age: 15
    }
]

let requied = arr.reduce((acc,item) => {
    if(item.age > 18){
        acc.push(item);
    }
    return acc;
},[]);

console.log(requied);