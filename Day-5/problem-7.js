// Write a Program to find length of the longest word in a sentence.

//first split string and loop threw that and check for longest str length;

//Solution 1
function checkLogestWord(str){
    let splitArr = str.split(' ');

    let wordlength = 0;

    for(let i = 0; i < splitArr.length; i++){
        if(splitArr[i].length > wordlength){
            wordlength = splitArr[i].length;
        }
    }
    return wordlength;
}


let str = "My name is Ridham Kansara";

console.log(checkLogestWord(str));

//Solution 2:

//first split str then sort in decending order and return 0th element.

function findLongest(str){
    let word = str.split(' ').sort((a,b) => {
        return b.length - a.length;
    });
    let longestWord = word[0];
    return longestWord;
}

console.log(findLongest(str));
