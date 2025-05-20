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

