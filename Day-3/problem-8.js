// Write a Program to count the occurrences of a character in a string in JavaScript?

//same as previous problem but with string and character in place of array and using counter
//if it matches the element counter will increment.

function countStrChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}

console.log(countStrChar("RidhamKansara","a"))


//Solution 2:


//first we split string by element we want to find and then print length of that


function charCount(str, char){
    value = str.split(char).length - 1;
    console.log(value);
}

charCount("RidhamKansara","a");


//Solution 3

//using reduce and counting character

function countChar(str,char){
    return str.split('').reduce((count,curr) => {
        return curr === char ? count + 1 : count;
    },0);
}

console.log(countChar("Kansara Ridham","a"));    