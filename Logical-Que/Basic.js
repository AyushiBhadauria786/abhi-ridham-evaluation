// reverse the string 

let str = "abhi";

// solve using split,reverse,join method
const reversed = str.split('').reverse().join('');
console.log(reversed);

//solve using Spread Operator

const spread = [...str].reverse().join('');
console.log(spread);

// solve using loop

let reversedLoop = "";
for(let i = str.length - 1; i>=0;i--){
    reversedLoop += str[i];
}
console.log(reversedLoop);

// two pointer 

function twopointer(str){
    left = 0;
    right = str.length-1;
    
    s = str.split('');
    
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]]
        left ++;
        right--
    }
    return s.join('')
}

console.log(twopointer(str));




// -------------------------------------------------------------------------------------------------------



const prompt = require("prompt-sync")();


// Check for Palindrome

let str1 = "level"


// string is palindrome or not

function checkPalindrome(string) {
    const len = string.length;
    
    for (let i = 0; i < len / 2; i++) {
        console.log(string[i])
       
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

console.log(value);



// Compare to reversed string

const ispalindrome = str1 === str1.split('').reverse().join('');
console.log(ispalindrome);






// --------------------------------------------------------------------------------------------


//  Find the Largest Number in an Array


let arr = [23,45,3,78,41,38,36,26];


// using for loop

let max = arr[0];
for(i = 1 ; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);


// using reducer 

let maximum = arr.reduce((max,curr)=>{
    if(curr > max){  
     return  curr
    }else{
        return max
    }
},arr[0])
console.log(maximum);

 
//math.max method

const maxi = Math.max(...arr);
console.log(maxi);





// --------------------------------------------------------------------------------------------------------





// Count Vowels in a String


let str2 = "abhi butani";



// using for loop 

let count = 0;
for (let char of str2.toLowerCase()) {
  if ('aeiou'.includes(char)) {
    count++;
  }
}

console.log(count);




// using match method

const count1 = (str2.match(/[aeiou]/gi) || []).length;
console.log(count1)



   


// ----------------------------------------------------------------------------------------------------------------------


