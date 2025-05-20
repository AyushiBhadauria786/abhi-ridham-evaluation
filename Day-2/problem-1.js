//Write a Program to check whether a string is a palindrome string.


//Solution-1

function isPalindrome(str){
    let reverse = ""
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i]
    }
    if(reverse == str){
       console.log(`${str} is Palindrome`)
    }else{
        console.log(`${str} is not Palindrome`)
    }
}

let str1 =  "racecar";
let str2 =  "Ridham";
let str3 =  "madam";

isPalindrome(str1);
isPalindrome(str2);


//Solution 2 

function palindromeCheck(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right){
            if(str[left] !== str[right]){
                return false
            }
            left++;
            right--;
    }
    return true;
}

console.log(palindromeCheck(str1));
console.log(palindromeCheck(str2));


//Solution 3

function isPalindromeBuitIn(str){
    let rev = str.split("").reverse().join("");

    if(rev == str){
        console.log("It is palidrome");
    }else {
        console.log("It is not palindrome");
    }
}

isPalindromeBuitIn(str1);
isPalindromeBuitIn(str2);