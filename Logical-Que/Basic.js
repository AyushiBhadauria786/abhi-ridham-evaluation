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