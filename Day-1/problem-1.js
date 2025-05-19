//1. Write a Program to reverse a string in JavaScript.


//Solution 1:

function revStr(str) {
    let str1 = '';
    for(let i = str.length - 1; i >= 0; i--){
        str1 += str[i];
    }
    return str1;
}

const example = "Ridham";
const result = revStr(example);
console.log(result);
console.log(revStr('Abhi-RK'));


//Solution-2:

function reverseString(str) {
    // let splitStr = str.split("");
    // let reverseStr = splitStr.reverse();
    // let joinStr = reverseStr.join("");
    // return joinStr;

    //better way using chaining
    return str.split("").reverse().join("");
}

console.log(reverseString("Ridham"));


//Solution - 3
function reverseString1(str) {
    if (str === "")
      return "";
    else
      return reverseString1(str.substr(1)) + str.charAt(0);
  }

  const output = reverseString1("hello")
  console.log(output);


