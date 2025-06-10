// Given an array of objects, each with a name and age property, create a new object where keys are 
// the names and values are the ages.

//Solution 1:

//first we want name and age as key value pair so we can use reduce method so we iterate over array and assign 
//people array's name to age and return in object.
const people = [
    {name: "Ridham", age: 22},
    {name: "Abhi", age: 22},
    {name: "Aakash", age: 22}
]

const newObj = people.reduce((acc,people) => {
    acc[people.name] = people.age;
    return acc;
},{})

console.log(newObj);

//Solution 2:

//then second if there is object we can use Map also so for that we created new map then we are iterating on
//people array and using map methods we are mapping name with age in Map object.

const usingMap = new Map(people.map((item) => [item.name, item.age]));
console.log(usingMap);


//Solution 3;

//We can also done this using Map object and combining for of loop, we use Map set method to set name and age
// in Map object.  
const m = new Map()
for(const key of people){
    m.set(key.name,key.age);
}

console.log(m);

