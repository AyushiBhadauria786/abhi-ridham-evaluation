// Transforming a deeply nested JavaScript object into a flat single-level object with concatenated keys 
//(Flatten a nested object).

const obj = {
    name: "Ridham",
    age: 22,
    mobile: 12345654,
    languages: {
        HTML: "Yes",
        CSS: "Yes",
        JavaScript: "Yes",
        PHP: "No"
    }
};

function flatObj(obj){
    let res = {};

    for(let key in obj){
        if((typeof obj[key]) === 'object' && !Array.isArray(obj[key])){
            let temp = flatObj(obj[key]);
            for(let i in temp){
                res[key + '.' + i] = temp[i];
            }
        }
        else {
            res[key] = obj[key]
        }
    }
    return res;
}

console.log(flatObj(obj));