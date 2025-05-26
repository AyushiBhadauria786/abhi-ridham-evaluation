// Write a program to count vowels in a string in JavaScript.

//Solution 1: 

//using counter variable and includes method

function checkVowels(str){
    const vowels = ["a","e","i","o","u"]
    let counter = 0;

    for(let letter of str.toLowerCase()) {
        if(vowels.includes(letter)){
            counter++;
        }
    }
    return counter;
}

let example = "JavaScript Program"
console.log(checkVowels(example));
console.log(checkVowels("Ridham"))


//Solution 2

//using filter and includes

function countVowels(str){
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let value = str.split("").filter(char => vowels.includes(char));

    return value.length;
}

console.log(countVowels(example));
console.log(countVowels("Ridham"))


//Solution 3

//using regular expression

function findVowels(str){
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
};

const s = "Hello World";
console.log(findVowels(s));
    