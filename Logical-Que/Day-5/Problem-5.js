// Check if string is a valid email


let Email = "abhibutani@gmail.com";


// Using for loop 


function isValidEmail(email) {
    if (!email) {
        return false;
    }

    let atSymbol = false;
    let dotSymbol = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atSymbol = true;
        } else if (email[i] === ".") {
            dotSymbol = true;
        }
    }

    return atSymbol && dotSymbol;
}

console.log(isValidEmail(Email));


// Using include method
function validateEmail(email) { 
    if (email.includes("@") && email.includes(".")) {
        return "Email is valid";
    }
    return "Email is not valid";
}

console.log(validateEmail(Email));




// Using Regular Expression

function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
console.log(valid(Email));