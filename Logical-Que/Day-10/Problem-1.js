// Validate Balanced and Properly Nested Parentheses in a String


let str = "((a+b))";


// Using Counter


function ValidParentheses(str) {
    let Parentheses = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        Parentheses++;
      } else if (str[i] === ')') {
        Parentheses--;
      }
      if (Parentheses < 0)
        return false;
    }
    return Parentheses === 0;
  }

  console.log(ValidParentheses(str));




// Using for loop 


function ValidParenthesesForLoop(str1){
    const output = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }


    for(let i = 0; i < str1.length; i++){
        const char = str1[i];

        if(char === '(' || char === '{' || char === '['){
            output.push(char);
        }else if(char === ')' || char === '}' || char === ']'){
            if(output.length === 0 || output.pop() !== map[char]){
                return false
            }
        }
    }
    return output.length === 0;
}

let str1 = "[{()}]"

console.log(ValidParenthesesForLoop(str1));
