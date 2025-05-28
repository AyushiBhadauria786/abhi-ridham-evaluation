// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

//Solution 1
function validStr(s){
    let stk = [];
    for(let i = 0; i < s.length; i++){
        let char = stk[stk.length - 1];
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stk.push(s[i])
        }
        else if (
        (char == "(" && s[i] == ")") ||
        (char == "{" && s[i] == "}") ||
        (char == "[" && s[i] == "]")){
            stk.pop()
        }else {
            return false
        }
    }
    return stk.length ? false : true
}

let testStr = "()[]{}";

console.log(validStr(testStr));



//Solution 2

function validParanthesis(str){
    let stack = [];
    let pairs = new Map([
        ['(',')'],
        ['{','}'],
        ['[',']']
    ]);

    for(let char of str){
        if(pairs.has(char)) {
            stack.push(char)
        }else {
            if(stack.length === 0 || pairs.get(stack.pop()) !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validParanthesis("()[]{}"));
console.log(validParanthesis("[]("));