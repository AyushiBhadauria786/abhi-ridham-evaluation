// Get Unique Characters from a String


let str = 'javascript';


// Using for loop

function uniqChar(str){
   const count = {};
   const uniq = [];                           // empty array

     for(const char of str){
        count[char] = (count[char] || 0) + 1;            // check the condition how many time same char in string
     }

     for(const char in count){
        if(count[char] === 1){            // if it is  equl to 1 it means it is uniq char
           uniq.push(char);
        }
     }
     return uniq;                    
}

console.log(uniqChar(str));




// Using set operator

const uniq =[...new Set(str)];
console.log(uniq);



//  using indexOf and lastIndexOf 

const uniqCharactor = str.split('').filter((char,index,arr)=>
    arr.indexOf(char) === arr.lastIndexOf(char) 
);

console.log(uniqCharactor);




