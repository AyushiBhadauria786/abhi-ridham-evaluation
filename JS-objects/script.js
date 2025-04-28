console.log("test");


const person = {
    firstName: "Jone",
    LastName : "Doe",
    age: 40,
    eyeColor: "blue"
};

console.log(person)

const copy = person
copy.age = 50;

console.log(copy)
console.log(person);

console.log(`Person Name is ${person.firstName} ${person.LastName} and is ${person.age} year old`)



//1)Object assign 
const person2 = {firstName: "Anne", LastName: "Smith"};

Object.assign(person,person2);

console.log(person);


//2)Object create
const details = {
    firstName: "Ridham",
    lastName: "Kansara",
}

const man = Object.create(details)
man.firstName = "Abhi"
man.lastName = "Bhutani"

console.log(details)
console.log(man);


//3)Object entries

let text = Object.entries(details);
console.log(text)

for(let x of text){
    console.log(x);
}

let fruites = {Banana: 300, Oranges: 200, Apples: 500};

let data = "";
for(let [fruit,price] of Object.entries(fruites)){
     data += fruit + ":" + price + "," ;
}

let values = data;
console.log(values)


//4)Object Keys

let keys = Object.keys(person);
console.log(keys);


//5)Object Values

let value = Object.values(person);
console.log(value);


//6)Object.freeze
let frozonObj = Object.freeze(details);
details.firstName = "newName";
console.log("original",details); //No change 
console.log(frozonObj);


