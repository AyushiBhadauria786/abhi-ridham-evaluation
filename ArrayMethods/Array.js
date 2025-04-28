// simple array

const num = [1,2,3,4,5,6,7]
const name = ["abhi","jay","bhargav"]
console.log(num);
console.log(name);

// using new keyword

const cars = new Array("Volvo","BMW","Mercedes")
console.log(cars);


// Array Methods :-

// 1) array length method :

const Fruit = ["Apple","Banana","Kiwi"]
console.log(Fruit.length);

const number = [12,78,9,67,56,2,92,0]
console.log(number.length);


// 2) array toString();

const Phone = ["apple","samsung","motorola"]
console.log(Phone.toString());

const number1 = [12,78,9,67,56,2,92,0]
console.log(number1.toString());

let a = number1.toString();
console.log(typeof(a))


// 3) arrat at();

const fruit = ["apple","banana","Kiwi"];
console.log(fruit.at(2));
console.log(fruit[2]);
console.log(fruit.at());


const number2 = [12,34,234,2,94,87];
console.log(number2.at(3));


// 4) array join()

const fruit1 = ["orange","mango","Grape"]
console.log(fruit1.join("*"))
console.log(fruit1.join())

const number3 = [23,57,3,98,23,67,32,43]
console.log(number3.join("*"));
console.log(number3.join())


// 5) array pop();

const fruits = ["Pineapple","Watermelon","Strawberry","Cherry","Papaya"]
const Numbers = [12,22,43,67,90,99]

fruits.pop();
console.log(fruits);

Numbers.pop();
console.log(Numbers);


// 6) array push();

fruits.push("Kiwi");
console.log(fruits);

Numbers.push("87");
console.log(Numbers);


// 7) array shift

fruits.shift();
console.log(fruits);

Numbers.shift();
console.log(Numbers);


// 8) array Unshift

fruits.unshift("pineapple");
console.log(fruits);

Numbers.unshift("12");
console.log(Numbers);


// 9) changing elements

fruits[0] = "Apple"
console.log(fruits);

Numbers[0] = "54"
console.log(Numbers);


// 10) deleted elements

// delete fruits[0];
// console.log(fruits);

// delete Numbers[0];
// console.log(Numbers);


// 11) Array concat()

const Merge = fruits.concat(Numbers);
console.log(Merge);

const add = fruits.concat("Plum")
console.log(add);


// 12) Array copyWithin()

console.log(Numbers)

const copy = Numbers.copyWithin(2)
console.log(copy);

const copy1 = Numbers.copyWithin(2,1)
console.log(copy1);


// 13) Array flat()

const arr = [[1,2],[4,5],[6,7]];
console.log(arr.flat());


// 14) Array flatMap()

const arr1 = [1,2,3,4,5,6]
const newarr = arr1.flatMap(x => [x, x * 10]);
// const newarr = arr1.flatMap(x=>(x,x*3));
console.log(newarr);



// 15) Array splice()

const Name = ["abhi","jay","yash","bhargav","aakash"]

// Name.splice(2);
console.log(Name);

// Name.splice(2,1,"Raj");
console.log(Name);

// Name.splice(2,1);
console.log(Name)



// 16) Array slice()

const array2 = [12,45,76,94,67,34];

console.log(array2.slice(2))
console.log(array2.slice(1,3))


// 17) Array Indexof

console.log(fruits);

console.log(fruits.indexOf("Cherry"));
console.log(array2.indexOf(76));


// 18) Array lastIndexOf

const fruits1 = ["Apple", "Orange", "Apple", "Mango","Apple"];
console.log(fruits1.lastIndexOf("Apple"));


// 19) Array includes

console.log(fruits.includes("Kiwi"));
console.log(fruits.includes("cherry"));


// 20) Array find()

const numbers = [12,23,45,13,5,10]

let Find = numbers.find((item)=>{
    return item > 18;
});
console.log(Find);


// 21) Array findindex


let findindex = numbers.findIndex((item)=>{
    return item > 18;
});
console.log(findindex);


// 22) Array findLast()


let FindLast = numbers.findLast((item)=>{
    return item > 18;
});
console.log(FindLast);


// 23) Array findLastIndex()


let findLastIndex = numbers.findLastIndex((item) => {
  return item > 18;
});

console.log(findLastIndex);



