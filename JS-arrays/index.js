// console.log("test");


//Array methods:

//1) Array length:

const fruites = ["Mango","Apple","Kiwi"]
console.log(fruites.length);


const numbers = [1,5,7,3]
console.log(numbers.length);


//2) Array toString() ;

 const stringValue = fruites.toString();
 console.log(stringValue);
 console.log(typeof(stringValue)); //string


//3) Array at():

console.log(fruites.at(2));  // returns  Kiwi
console.log(numbers.at(3))   // returns 3

//4) Array join():

console.log(fruites.join(" * "))
console.log(numbers.join(" + "))


//5)Array pop()

let fruit = fruites.pop();
console.log(fruit)
console.log(fruites);


//6)Arrat push()

console.log(fruites.push("Orange"))
console.log(fruites);

//7) Array shift() 

console.log(fruites.shift());
console.log(fruites);

//8) Array unshift()

console.log(fruites.unshift("Banana"))
console.log(fruites)

//9) Array Delete

const vegies = ["tomato","potato","onion","cucumber"]
// delete vegies[0]
console.log(vegies);


//10) Array concat()

const arr1 = ["value1","value2"]
const arr2 = ["value3","value4"]

let mergeArr = arr1.concat(arr2);
console.log(mergeArr);

const arr3 = ["value5","value6"]

mergeArr = arr1.concat(arr2,arr3)  //for any values
console.log(mergeArr)



//11) Array copywithin()

console.log(vegies)
vegies.copyWithin(2,0,2)
console.log(vegies)


//12)Array flat

const myArr = [[1,2],[3,4],[5,6]]
console.log(myArr.flat())


//13)Array splice

fruites.splice(2,0,"Lemon");
console.log(fruites)


//14) Array slice

let removed = fruites.slice(2);
console.log(removed);



//In array try undefine, null , empty string



const arr4 = [1,2,5,6,7]
// arr4.splice(2,1);


arr4.slice(1,3);
console.log(arr4);

arr4.unshift()
console.log(arr4)



const newArr = ["a","b","c","d","e","f"]
const remove = newArr.splice(3,3)
// const remove = newArr.shift(3)
console.log(remove);
newArr.unshift(...remove);
console.log(newArr);


//Array srching methods
//15)Array indexOf

let position = fruites.indexOf("Apple");
console.log(position + 1);

//16)Array lastndexOf

let lastIndex = fruites.lastIndexOf("Apple");
console.log(lastIndex); 


//17)includes

let isAvailable = fruites.includes("Apple");
console.log(isAvailable);


//18)find

function findNum(nums){
    return nums > 18;
}

const num = [1,15,18,25,20,14];
const search = num.find(findNum);
console.log(search)


//19) find index

let first = num.findIndex(findNum);
console.log(first)


//20)find last and lastIndex

let last  = num.findLast(x => x > 18);
console.log(last)
console.log(num.findLastIndex(x=>x>18));



//Sorting methods

//21) sort()

let sorted = fruites.sort();
console.log(sorted);

//for numbers

console.log("original array:",num)
let numSort  = num.sort(function(a,b){
    return a - b; 
})
console.log(numSort)
console.log("original",num)


//22) reverse() 

console.log("original",fruites)
let strReverse = fruites.reverse();
console.log(strReverse)

let reversed = num.reverse();
console.log(reversed)
console.log("original",num)



