// Basic Example

// traditional example

function add(a,b){
    return a+b;
}

console.log(add(5,5));


// Using Currying


function add1(a){
    return function(b){
        return a+b;
    }
}

console.log(add1(5)(5))





// Real life examples create a email function


function SendAutoMail(to){
    return function(subject){
        return function(message){
            console.log(`sent this email ${to} for ${subject} : ${message}`)
        }
    }
}


let output1 = SendAutoMail("abhibutani2592@gamil.com");
let output2 = output1("Shopping")
let output3 = output2("thank you for shopping best regards[your company]");






// Real life example with api 




function CurrayFunApi(parameter1){
    return async function(parameter2){
        
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${parameter1}/${parameter2}`)
            const data = await response.json();
            return console.log(data);
        }
        catch(error){
            console.error(error);
        }
    }
}


CurrayFunApi('users')(1);
CurrayFunApi('todos')(1);
CurrayFunApi('posts')(1);





