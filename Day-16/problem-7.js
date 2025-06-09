// Write a custom implementation of map() without using in-built ones.

//Solution:

Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw Error("undefined is not a function");
  }
  const newArr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};

const arr = [1, 2, 3, 4];
const output = arr.myMap((item) => {
  return item * 2;
});

console.log(arr);
console.log(output);
