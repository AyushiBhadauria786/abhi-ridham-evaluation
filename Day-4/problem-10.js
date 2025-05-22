// How to Append an Object as a Key Value in an Existing Object in JavaScript ?

//Solution 1

//using spread operator

let obj1 = {
    name: "Ridham",
    age: 22
}

let obj2 = {
   city: "Ahmedabad",
   State: "Gujarat"
}

let obj3 = {}

obj1 = {
    ...obj1,
    ...obj2,
}

console.log(obj1);


//Solution 2

//using object assign property

let fruits = {
    fruit1: "Apple",
    fruit2: "Kiwi"
}

let mix = {
    vegetable1 : "Potato",
    vegetable2 : "Cabbage",
}

Object.assign(mix,fruits);

console.log(mix);


//Solution 3

//combining object.entries and forEach

let Object1 = {
    Name: "Nikunj",
    Age: 22,
  };
  
  let Object2 = {
    Occupation: "Developer",
  };


  Object.entries(Object2).forEach(([key,value]) => {
    Object1[key] = value;
  });

  console.log(Object1);  