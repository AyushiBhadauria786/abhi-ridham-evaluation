// Write a JavaScript program that returns true if an object looks like a Promise, false otherwise.


//Solution 1

//here we check it with promise constructor and  promsie.resolve method with given object and comapare it.


function isPromise(p){
    if(Promise && Promise.resolve){
        return Promise.resolve(p) === p;
    }
}

let promise = new Promise(function(resolve, reject){
    resolve()
});

let num = 10;
let name = "Ridham";
let obj = {
    city : "Ahmedabad"
};

console.log(isPromise(num));
console.log(isPromise(name));
console.log(isPromise(promise));
console.log(isPromise(obj));


//Solution 2

//here we check for a obj is not null, its type shold be object or function and it shold have .then property 
//which also is a function

function isPromiseLike(obj){
    return obj !== null && 
            (typeof obj === 'object' || typeof obj === 'function') 
                && typeof obj.then === 'function';

}

console.log(isPromiseLike(promise));
console.log(isPromiseLike(num));
