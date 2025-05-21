// Count Occurrences of a Character|

// how many time a appears


let str = "abhi butani";


// using for loop


function CountChar(str){
    let str1 = str.toLowerCase();            // convert char to lowercase 
    let count = 0;
    for(let i = 0; i< str1.length;i++){
        if(str1[i] === 'a' ){                // check it is equal and increment
            count++;
        }
    }
    return count;                  
}

console.log(CountChar(str));



//  using match method

const count = (str.match(/a/g) || []).length;        // check it match with a letter
console.log(count);



// using split 


function countOccurrences(str, char) {
    console.log(str.split(char));
    return str.split(char).length - 1;               // split with char a 
}

console.log(countOccurrences(str,'a'));