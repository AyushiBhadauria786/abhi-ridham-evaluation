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
console.log(person2);


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


//Deep Copy and Shallow Copy

let employee = {
    eid: "E101",
    ename: "Ronak",
    salary: 50000
}


//shallow copy
console.log("Employee=====>",employee)

const newEmployee = employee
console.log("newEmployee===>",newEmployee)

console.log("after changes=====>")

newEmployee.ename = "Rahul";

console.log("Employee=====>",employee)
console.log("newEmployee===>",newEmployee)

//deepCopy

const employee2 = {
    eid: "E201",
    ename: "Mahesh",
    salary: 20000
}


const newEmp = JSON.parse(JSON.stringify(employee2));
console.log("Initial:",employee2);
console.log("Copy Initial:",newEmp);

console.log("After modification===>");
newEmp.ename = "Mansi"

console.log(employee2);
console.log(newEmp);



//Object and Array destructuring:


//-Arrays Destructuring

let intro = ["Hello","I","am","Ridham"];
let [greet,pronoun,,name] = intro;

console.log(greet);
console.log(pronoun);
console.log(name)


//using rest
let [greeting, ...allvalues] = intro;
console.log(greeting);
console.log(allvalues);



//=Object destructuring

const newPerson = {profileName: "Sara", country: "India", 
                  job: "Developer", address: {street: "xyz", area: "local"}}

const {profileName,country,job, address : {street , area}} = newPerson

console.log(profileName)
console.log(country)
console.log(job)
console.log(street)
console.log(area)





