// const obj = {
//     name: "Ridham",
//     age: 23,
// };

// const todos = ["go to gym","Read a book","Eat"];

// localStorage.setItem("user",JSON.stringify(obj));
// localStorage.setItem("todos",JSON.stringify(todos));

// localStorage.setItem("str","myName");

// let value = localStorage.getItem("user");

// localStorage.setItem("number",15);

// const arr = localStorage.getItem("todos");
// const str = localStorage.getItem("str");
// const num  = localStorage.getItem("number");

// console.log(JSON.parse(arr));
// console.log(JSON.parse(value));
// console.log(Array.isArray(arr));
// console.log(toString(str));
// console.log(parseInt(num));

// console.log(localStorage);

// let data = localStorage;

// // for(let key in data){
// //     localStorage.removeItem(key);
// // }

// console.log(data);

// // localStorage.clear();

// let ob1 = {
//     firstName: "Any",
//     lastName: "value",
//     address: {
//         city: "ABD",
//         state: "GUJ",
//     }
// }

// let ob2 = ob1;

// ob1.lastName = "XYZ";

// ob1.address.state = "Rajasthan";

// console.log(ob1);
// console.log(ob2);

// const demo = {
//     name: "Ridham",
//     getValue: {
//         firstName: "any",
//         lastName: "xyz",
//     },
//     test: function(){
//         console.log("test fun")
//     }
// }

// // console.log(demo)

// let demo2 = JSON.stringify(demo);
// console.log(demo2)

const deepObj = {
  name: "Ridham",
  age: 22,
  officeNum: [19, 20, 21],
  address: {
    city: "ABD",
    native: ["Jamnagar", "Gujarat"],
    Area: {
      mainArea: "Jagatpur",
      building: "Ganesh Glory",
      isGSTRegister: false,
      Block: {
        bolckNum: "E",
        officeNum: [19, 20, 21],
        registerNum: null,
        isRegistered: true,
      },
    },
  },
  test: function () {
    console.log("Deep nested function");
  },
  otherValue: undefined,
};

// console.log("Original",deepObj);
// let copyDeepObj = {...deepObj};
// console.log(copyDeepObj);

let copyDeepObj = {};

console.log("Original => ", deepObj);

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let temp = [];
  if (obj === Array.isArray) {
    temp = []
  }else{
    temp = {}
  }

  for (let key in obj) {
    // if (obj[key]) {
      temp[key] = deepCopy(obj[key]);
      copyDeepObj = temp;
    // }
  }
  return copyDeepObj;
}

console.log(deepCopy(deepObj));
console.log(copyDeepObj)

//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//         if(typeof obj[key] === Array.isArray || null || undefined){
//             deepCopy(obj[key])
//         }
//         copyDeepObj = obj[key]
//         console.log(copyDeepObj)
//     }
// return copyDeepObj;

// deepCopy(deepObj);
