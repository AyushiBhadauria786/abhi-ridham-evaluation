// Find the First Non-Repeating Character



// using object



let str = "abhi butani";


function firstUniqChar (str) {
    const charCount = {};

    for (const char of str){
        charCount[char] = (charCount[char] || 0) + 1;    // it check how many time char in string
        console.log(charCount);
    }

    for(const char of str){
        if(charCount[char] === 1){   //  it check char in string only 1 time
            return char; // return that char
        }
    }
    return ""
}

console.log(firstUniqChar(str));



// using indexof and lastindexof


function firstUniq(str) {
    for(let i = 0; i < str.length;i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){            // it check first index of char and and last index of char it is one that is uniq char
            return str[i]
        }
    }
    return null;
}



console.log(firstUniq(str));



// using filter

function uniq(str){
    let sp = str.split("");

    for( let i = 0; i < str.length ; i++){
        if(sp.filter((char)=> char === sp[i]).length === 1){    // same it check length is 1 then retun that char 
            
            return sp[i];
        }
    }
    return null;
}

console.log(uniq(str));