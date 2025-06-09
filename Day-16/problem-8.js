// Write a custom implementation of filter() without using in-built ones.

//Solution:

Array.prototype.myFilter = function (callback) {
    if(!callback){
        throw Error("undefined is not a function")
    }
    const newArr = [];
    for(let i = 0; i < this.length;i++){
        if(callback(this[i],i)){
            newArr.push(this[i])
        }
    }
    return newArr
}


const arr = [1,2,4,5,6,7];

//using fiter
console.log(arr.filter(item => item % 2 !== 0));

//using custom filter getting same result
const output = arr.myFilter((item) => item % 2 !== 0);
console.log(output);