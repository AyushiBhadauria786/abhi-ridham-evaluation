// Remove whitespaces from string


let str = "     abhi_butani   ";

// Using For loop 


function RemoveWhiteSpaces(str){
    let output = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] !== ' '){
            output += str[i];
        }
    }
    return output;
}

console.log(RemoveWhiteSpaces(str));


// Using trim Method

const output = str.trim(" ");
console.log(output);




// Using split and join method 


const output1 = str.split(' ').join('');
console.log(output1);