// simple object creation

const person = {
    name:"abhi",
    age:21
}
console.log(person);

// using new key word creation

const person1 = new Object();



// add property

person.city = "junagadh";
console.log(person)

// modify property

person.name = "jay";
console.log(person)


// delete property

delete person.name;
console.log(person)



// => Object Methods

// 1) Object Assign()

const per = {
    fname : "abhi",
    lname : "butani",
    age: 22,
    city : "junagadh"
}

const per2 = {
    fname : "tilak",
    lname : "manvar",
    age : 21
}

const Assign = Object.assign(per,per2)
console.log(Assign); // it assign the value of per2 to per


// 2) Object entries()

const Entries = Object.entries(per)
console.log(Entries);  // it return every key-pair value as array


// 3) object fromEntries()

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
const myObj = Object.fromEntries(fruits) // it return an object key/pair value from list
console.log(myObj);


// 4) Object Values()

const Value = Object.values(per);
console.log(Value);   // it return an array of value from the object


// 5) Object keys()

const Key = Object.keys(per)
console.log(Key);  // it return an array of keys from the object


// 6) Object freeze()

Object.freeze(per2);
console.log(per2);
per2.age = 23;
console.log(per2); // we can not change property of object



// 7) Object create()

const person3 = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  };

const man = Object.create(person3);
man.firstName = "Peter";

console.log(person3.firstName)
console.log(man.firstName)