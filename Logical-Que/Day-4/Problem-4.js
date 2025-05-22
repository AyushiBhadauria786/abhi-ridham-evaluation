// Find the Longest Word in a String


let str = "hi my name is abhi and I am working on Javascript";


// Using for loop



function FindLongestWord(str){
    let longestWord = '';                // longestword is empty at starting
    let word = str.split(' ');           // split the string 

    for(let i = 0; i < word.length; i++){
        if(word[i].length > longestWord.length){        // compare word[i].length is greater than logestWord
            longestWord = word[i];                       // store string in longestWord
        }
    }
    return longestWord;
}

console.log(FindLongestWord(str));




// Using ForEach loop


function LongestWordForEach(str){
    let longestWord = '';
    let word = str.split(' ');

    word.forEach((words)=>{
        if(words.length > longestWord.length){
            longestWord = words;
        }
    })
    return longestWord;
}

console.log(LongestWordForEach(str));



// Using sort method



function LongestWordSort(str) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

console.log(LongestWordSort(str));