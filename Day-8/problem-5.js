// Write a program to validate email address in JavaScript.

//Solution 1

function validateEmail(str){
    let atsymbol = str.indexOf("@");
    if(atsymbol < 1){
        return false;
    }
    let dot = str.indexOf(".");
    if(dot === str.length - 1){
        return false
    }
    if(dot <= atsymbol + 2){
        return false;
    }
    return true;
}

console.log(validateEmail("demo@any.com"));


//Solution 2 

function emailValidater(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

const email = "ridhmkansara@gmail.com";
console.log(emailValidater(email));