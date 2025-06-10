// Given an array of strings, filter out strings with less than 5 characters, convert the 
// remaining strings to uppercase, and join them into a single comma-separated string.

//Solution 1

//Using sepaerate methods first filter chaacters less than 5 then converting it to upperCase and join with comma
// as a string.

const stringArray = ["apple", "banana", "kiwi","grap","orange","mango"]

const filterArray = stringArray.filter(words => words.length >= 5);
console.log(filterArray);

const converUppercase = filterArray.map(item => item.toUpperCase());
console.log(converUppercase);

const final = converUppercase.join(", ");
console.log(final);



//Solution 2

//brute force approch like using multiple for loops we can achieve same result 

function convertString(arr){
    let filterStr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= 5){
            filterStr.push(arr[i]);
        }
    }

    let capitalStr = [];
    for(let i = 0; i < filterStr.length; i++){
        capitalStr.push(filterStr[i].toUpperCase());
    }

    let finalArr = [];
    for(let i = 0; i < capitalStr.length; i++){
        finalArr += capitalStr[i];
        if(i < capitalStr.length - 1){
            finalArr += ", ";
        }
    }
    return finalArr;
}

console.log(convertString(stringArray));