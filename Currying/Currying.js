// Normal function


function sum1(a,b,c){
    return a+b+c;
}
console.log(sum1(1,2,3));


// currying function 

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
} 

console.log(sum(1)(2)(3));



// arrow function


const add = ((a,b,c)=>{
    return a+b+c;
})
console.log(add(1,3,6));



// currying in arrow function

const add1 = ((a)=>{
    return (b) =>{
        return (c) =>{
            return a+b+c;
        }
    }
})

console.log(add1(1)(3)(6));