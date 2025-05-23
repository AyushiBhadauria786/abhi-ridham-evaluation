// Write a function that determines if two strings are anagrams of each other

//Anagram means two words are anagram of each other when they contain the same letters but in 
// different order.

//Example: listen and silent

//Solution 1

//first counting all and incrementing and then checking with other string and finally checking with 
//count value;


function checkAnagram(str1, str2){
    let counter = {};

    for(let char in str1){
        counter[char] = (counter[char] || 0) + 1;
    }

    for(let char in str2){
        counter[char] = (counter[char] || 0) - 1;
    }

    for(let key in counter){
        if(counter[key] !== 0){
            return false;
        }
    }

    return true;
}

let sentence1 = "listen";
let sentence2 = "silent";

console.log(checkAnagram(sentence1,sentence2));



//Solution 2:


//using buid in methods

function checkStr(str1, str2){
    let s1 =  str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    return s1 === s2;
}

console.log(checkStr(sentence1,sentence2));


//solution 3:

//taken refrence from striver website and seen there way

function anagramCheck(s1,s2){
    if(s1.length !== s2.length){
        return false;
    }
    
    let freq = new Array(26).fill(0);

    for(let i = 0; i < s1.length; i++){
        freq[s1.charCodeAt(i) - 'A'.charCodeAt(0)]++;
    }
    for(let i = 0; i < s2.length; i++){
        freq[s2.charCodeAt(i) - 'A'.charCodeAt(0)]--;
    }

    for(let i = 0; i < 26; i++){
        if(freq[i] !== 0){
            return false
        }
    }

    return true;

}

console.log(anagramCheck(sentence1,sentence1));