// Check if a String Contains Another String in JavaScript?


//Solution - 1

//By checking indexOf subvalue we can check for string

function checkSubStr(str,subvalue){
    if(str.indexOf(subvalue) !== -1){
        return true;
    }else{
        return false;
    }
}

console.log(checkSubStr("RidhamKansara","sra"));




//Solution- 2

//by using includes build in method

const value = "Exaple string";
console.log(value.includes("no"));
