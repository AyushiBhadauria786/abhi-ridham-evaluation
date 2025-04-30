console.log("hello");

// sessionStorage.setItem("Ridham","Kansara")
// console.log(sessionStorage)

const name = document.getElementById("name")
const age = document.getElementById("age")

const saveLocalBtn = document.getElementById("btnLocal")
const saveSessionBtn = document.getElementById("btnSession")

const Display = document.getElementById("displayText")


//for Local
saveLocalBtn.addEventListener("click",() => {
    const userName = document.getElementById("name").value
    const useAge = document.getElementById("age").value

    name.textContent = userName
    age.textContent = useAge
    localStorage.setItem("name",userName);
    localStorage.setItem("age",useAge)
})
console.log(localStorage)

// function displayUserName(){
//     const nameFromLocalStorage = localStorage.getItem("name")
//     const ageFromLocalStorage = localStorage.getItem("age");

//     if(nameFromLocalStorage && ageFromLocalStorage) {
//         Display.textContent = `${nameFromLocalStorage} and ${ageFromLocalStorage}` ;
//         console.log(nameFromLocalStorage)
//     }else{
//         Display.textContent = "No data in local storage"
//     }
// }

// displayUserName()

//for Session
saveSessionBtn.addEventListener("click",() => {
    const userName = document.getElementById("name").value
    const useAge = document.getElementById("age").value

    name.textContent = userName
    age.textContent = useAge
    sessionStorage.setItem("name",userName);
    sessionStorage.setItem("age",useAge)
})
console.log(sessionStorage)


//All types of functions


//-Regular

function areaOfCircle(radius){
    return Math.PI * radius * radius;
}

console.log(areaOfCircle(5));


//-anonymus function

let square  = function(number) {
    return number * number
};

console.log(square(5));


//-IIFE function

(function sum(a,b){
    console.log(a + b)
})(15,4);

//IIFE with closure
const counterFunc = (function() {
    let count = 0
    return function () {
        console.log(`Hello ${count}`);
        return count++;
    }
})()

counterFunc();
counterFunc();
counterFunc();

//-arrow

const a = (x,y) => {
    console.log(x * y);
}

a(2,5);


//-callback 

function greet(message,callback) {
    console.log(`Hello ${message}.`)
    callback();
}

function saySomething() {
    console.log("Good By");
}

greet("Ridham",saySomething);

//first class function and first class citizens

function teacher(){
    return "Teacher"
}

function student(){
    return "Student"
}

function useBoth(user){
    console.log("Welcome",user());
}

let message = useBoth(teacher);
let message1 = useBoth(student);


//curring
function sum(a){
    return function add(b){
        return a + b
    }
}

console.log("Curring sum:",sum(5)(2));


//higher Order function:

const arr1 = [1,2,3,4,5]

const mapValue = arr1.map((item) => {
    console.log(item * 2)
})



function highOrder(value){
    console.log("HOC function");
    value()
}

function callbackFunc(){
    console.log("Callack function")
}

highOrder(callbackFunc);




const radius = [1,2,3];

const area = function(radius){
    return Math.PI * radius * radius
}

const diameter = function(radius){
    return 2 * radius
}

const calculate = function(radius,logic){
    let output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,area))
console.log(calculate(radius,diameter))


