// Reverse each word in sentence

let str = "abhi butani";

// using for loop



function reverse(str){
    let output = '';
    for(let i =  str.length - 1; i>=0 ; i--){
        output += str[i];
    }
    return output;
}
console.log(reverse(str));







// Using split reverse and join method

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
console.log(reverseWords(str))



