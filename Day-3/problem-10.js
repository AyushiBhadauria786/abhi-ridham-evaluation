//Find the First Non-Repeated Character in a String in JavaScript?

//Solution - 1
function findChar(str){
    let result = '';
    for(let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)){
            result = char;
            break;
        }
    }
    return result;
}

console.log(findChar("rrridham"));


//Solution - 2

let str = "geeksforgeeks"
let s = new Set();
let value = new Set();

for(let char of str){
    if(s.has(char)){
        value.add(char)
    }else{
        s.add(char)
    }
}

let result = Array.from(s).filter(item => !value.has(item))

console.log(result);
