// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern 
// and a non-empty word in s.

//using map we can map the pattern with character and check for the pairs.

const pattern = "abba"
const s = "dog cat cat dog"

const pattern2 = "abad"


function wordPattern(pattern, s){
    const words = s.split(" ");
    if(pattern.length !== words.length){
        return false
    }

    const char1 = new Map();
    const char2 = new Map();

    for(let i = 0; i < pattern.length; i++){
        let char = pattern[i];
        let word = words[i];

        if((char1.has(char) && char1.get(char) !== word) ||
        (char2.has(word) && char2.get(word) !== char)){
            return false;
        } 

        char1.set(char,word);
        char2.set(word,char);

    }
    return true;
}

console.log(wordPattern(pattern,s));
console.log(wordPattern(pattern2,s));