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

delete fruits[0];
console.log(fruits);

delete Numbers[0];
console.log(Numbers);

// 11) 