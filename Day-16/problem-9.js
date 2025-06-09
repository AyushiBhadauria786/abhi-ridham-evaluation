// Write a program that implements a curry function.

//Solution 1 :

//Simple example:

function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}

console.log(add(3)(2)(10));


//Solution 2:

//Practical use case for email like confirmation mail.

function sendAutoEmail(to){
    return function(subject){
        return function (body){
            console.log(`Sending Email to ${to} with ${subject} : ${body}`)
        }
    }
}

let step1 = sendAutoEmail("ridhamkansara26@gmail.com");
let step2 = step1("New Order Confirmation")
step2('Hey Ridham, here is your order id and details of  your order.');


//Solution 3:

//Same but can be use to send user request like this:

function sendReq(greet){
    return function(name){
        return function(message){
            console.log(`${greet} ${name} ${message}`);
        }
    }
}

let first = sendReq("Hello");
let second = first("Rahul,");
second("Can you add me on linkedIn ?");