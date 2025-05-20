const prompt = require("prompt-sync")();


// Check for Palindrome

let str1 = "level"


// string is palindrome or not

function checkPalindrome(string) {
    const len = string.length;
    
    for (let i = 0; i < len / 2; i++) {
        console.log(string[i])
       
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

console.log(value);



// Compare to reversed string

const ispalindrome = str1 === str1.split('').reverse().join('');
console.log(ispalindrome);

