// Write a program to validate url in JavaScript.

//Solution 1
const str = "www.google.com"

function checkURL(str){
    let arr = str.split('.');
    if(arr[0] == "www" && arr[arr.length - 1] == "com"){
        return true
    }else{
        return false
    }
}

console.log(checkURL(str));


//Solution 2
function validateURL(url){
    try {
        new URL(url);
        return true
    } catch (error) {
        return false;
    }
}


let url = "https://www.google.com";
console.log(validateURL(url));


//Solution 3
function usingRegex(url){
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    return pattern.test(url)
}

const testURL = "www.example.com"
console.log(usingRegex(testURL))


