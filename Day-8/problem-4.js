// Given a string s, return true if s is a good string, or false otherwise.

//A string s is good if all the characters that appear in s have the same number of occurrences 
// (i.e., the same frequency).


//Solution 1

function checkGoodStr(str){
    let letters = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(letters[char]){
            letters[char]++;
            // console.log(letters[char])
        }else {
            letters[char] = 1;
        }
    }

    const values = Object.values(letters);
    // console.log(values)
    const firstVal = values[0];
    // console.log(firstVal)

    for(let i = 1; i < values.length; i++){
        // console.log(values[i])
        if(values[i] !== firstVal){
            return false;
        }
    }
    return true;
}

console.log(checkGoodStr("abcaffa"));

