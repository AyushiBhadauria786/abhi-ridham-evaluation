
function data1(){
    const data = localStorage.setItem("user","hii my name is abhi");
    return data;
}

function data2(){
    const data2 = localStorage.setItem("student","hii i am student");
}


function data3(){
    const data3 = localStorage.setItem("people","hii i am people");
}

let obj = {
    name : "abhi",
    city :"ahmedabad"
}


localStorage.setItem(("object"),JSON.stringify(obj));

let output = localStorage.getItem("object");
console.log((JSON.parse(output)),typeof(output));

localStorage.setItem("Number",23);

let num = localStorage.getItem("Number");
console.log(num,typeof(num));



let arr = [1,2,3,4,5]
localStorage.setItem("array",arr);

let array = localStorage.getItem("array");
console.log(array,typeof(arr));


const output2 = localStorage.key(2);
console.log(output2);

console.log(localStorage.length, "len");


for(let i = localStorage.length; i>=0;i--){

    const out = localStorage.key(i);
    console.log(out," ",i);
    
    localStorage.removeItem(out);
}
