// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.


//Solution 1


function checkStr(haystack,needle){
    const h1 = haystack.length;
    const n1 = needle.length;

   const addExtra = Array(n1).fill(0);
   let j = 0;

   for(let i = 1; i < n1;i++){
    while(j > 0 && needle[i] !== needle[j]){
        j = addExtra[j - 1];
    }
    if(needle[i] === needle[j]){
        j++
    }
    addExtra[i] = j
   }

   j = 0;

   for(let i = 0; i < h1; i++){
    while(j > 0 && haystack[i] !== needle[j]){
        j = addExtra[j - 1];
    }
    if(haystack[i] === needle[j]){
        j++;
    }
    if(j === n1) {
        return i - n1 + 1
    }
   }
   return -1;
}

const haystack  = "sadbutsad"; 
const needle = "sad";

const haystack2  = "leetcodeleet"; 
const needle2 = "leeto";

console.log(checkStr(haystack,needle));
console.log(checkStr(haystack2,needle2));



//Solution 2

function strCheck(h,n){
    const haystack = h.length;
    const needle = n.length;

    for(let i = 0; i <= haystack - needle; i++){
        if(h.slice(i, i + needle) === n){
            return i
        }
    }
    return -1;
}

console.log(strCheck(haystack,needle));
console.log(strCheck("hello","ll"));