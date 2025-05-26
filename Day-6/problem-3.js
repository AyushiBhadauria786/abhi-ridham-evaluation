// Write a program to find Unique characters from a string in JavaScript.

//Solution 1

//using 2 for loop and flag

function uniqueChar(str){
    let value = '';

    for(let i = 0; i <str.length;i++){
        let flag = false;
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                flag = true;
                break;
            }
        }
        if(!flag){
            value+=str[i];
        }
    }
    return value;
}

const s = "aaaaabbbbbccccc"

console.log(uniqueChar(s))


//Solution 2

//using counter and then pushing into array 

function findUnique(str){
    const count = {};
    const element = [];

    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }

    for(let char in count){
        if(count[char] === 1){
            element.push(char);
            // console.log(element)
        }
    }
    return element;
}

let arr = "javascript"
console.log(findUnique(arr));

