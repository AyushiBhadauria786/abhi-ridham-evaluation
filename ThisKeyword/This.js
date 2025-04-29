// this keyword

// => using alone

console.log(this);  // it refer globel window object


// using this in normal function

const person = {
    name : "abhi",
    age : 21,
    detail : function(){
        console.log(`hyy my name is ${this.name} and my age is ${this.age}`)
    }
}

person.detail();


const person1 = {
    name : "tilak",
    age : 21,
    detail : function(city){
        console.log(`hyy my name is ${this.name} and age is ${this.age} and city is ${city}`)
    }
}

person1.detail("junagadh");


// using arrow function


const person3 = {
    name : "abhi",
    age : 21,
    detail : () => {
        console.log(`hyy my name is ${this.name} and my age is ${this.age}`)
    }
}
person3.detail();




// using event listner 



// document.getElementById('Btn').addEventListener('click', function() {    //it refer DOM element
//     console.log('this in a event', this); 
// })




// this using in method


// implicit binding 

const per ={
    name : "abhi",
    age : 22,
    detail : function () {
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
}
per.detail();




// explicit binding (call,apply and bind)

// Call method


const person4 = {
    name : "abhi",
    age : 22,
    detail : function(){
        return `my name is ${this.name} and age is ${this.age}`
    }
}

const person5 = {
    name : "jay",
    age : 23
}

console.log(person4.detail.call(person5));




const person6 = {
    name : "abhi",
    age : 22,
    detail : function(city){
        return `my name is ${this.name} and age is ${this.age} and city is ${city}`
    }
}

const person7 = {
    name : "jay",
    age : 23
}

console.log(person6.detail.call(person7,"junagadh"));



// apply method


const person8 = {
    name : "abhi",
    age : 22,
    detail : function(){
        return `my name is ${this.name} and age is ${this.age}`
    }
}

const person9 = {
    name : "jay",
    age : 23
}

console.log(person8.detail.apply(person9));




const person10 = {
    name : "abhi",
    age : 22,
    detail : function(city,village){
        return `my name is ${this.name} and age is ${this.age} and city is ${city} and village ${village}`
    }
}

const person11 = {
    name : "jay",
    age : 23
}

console.log(person10.detail.apply(person11,["junagadh","jilana"]));



// bind method 




const person12 = {
    name : "abhi",
    age : 21,
    detail : function (city,contry) {
        return(`hiii ${this.name} your age is ${this.age} and your city is ${city} and country is ${contry}`)
    }
}
const person13 = {
    name : "yash",
    age : 24
}
const data = person12.detail.bind(person13,"rajkot","india");
console.log(data());




const person14 = {
    name : "abhi",
    age : 21,
    detail : function (city,contry) {
        return(`hiii ${this.name} your age is ${this.age}`)
    }
}
const person15 = {
    name : "yash",
    age : 24
}
const data1 = person14.detail.bind(person15);
console.log(data1());