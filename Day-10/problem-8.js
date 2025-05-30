// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.


//Solution 2

function isSubSequence(s1,s2){
    let n = s1.length;
    let m = s2.length;
    let i = 0,j = 0;

    while(i < n && j < m){
        if(s1[i] === s2[j]){
            i++
        }
        j++;
    }
    return i === n;
}


const str1 = "abc"
const str2 = "ahbgdc"

const test1 = "axc"
const test2 = "ahbgdc"
console.log(isSubSequence(str1,str2));
console.log(isSubSequence(test1,test2));


//Solution 2

function checkSubSequence(s1,s2){
    if(s1.length > s2.length){
        return false
    }
    if(!s1){
        return true
    }

    let i = 0;
    for(let j = 0; j < s2.length; j++){
        if(s1[i] === s2[i]){
            i++
        }
    }
    return i === s1.length;
}

console.log(checkSubSequence(str1,str2));
console.log(checkSubSequence(test1,test2));