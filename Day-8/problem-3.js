// Given a string s consisting of words and spaces, return the length of the last word in the string.

//Solution 1

function lastWordLen(str){
    let res = ""
    if(str.trim() === ""){
        return 0;
    }
    let splitStr = str.split(' ');
    splitStr = splitStr.filter(item => item.length >= 1);
    res = splitStr[splitStr.length - 1];
    
    return res.length
}

console.log(lastWordLen("Hello World"))
console.log(lastWordLen("Ridham Kansara"))



//Solution 2

function lengthOfLastWord(s){
    let totalLength = s.length;
    let length = 0;
    while(totalLength > 0){
        totalLength--;
        if(s[totalLength] !== " "){
            length++;
        }else if(length > 0){
            return length
        }
    }
    return length
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord(""))


