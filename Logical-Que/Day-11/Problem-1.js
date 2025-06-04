// Write a JavaScript program that converts a callback-based function to a Promise-based function.


function callbackFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            callback(null, result)
        }
        else {
            callback(new Error('result is not odd', null ))
        }
    }, 1000)
}

function promiseFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        callbackFunction(arg1, arg2, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}


promiseFunction(2, 3)
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });


promiseFunction(5,5)
.then(result =>{
    console.log('Result :', result);
})
.catch(error =>{
    console.log('Error :', error.message);
})




// Another example 


function fetchDataCallback(url,callback){
    setTimeout(() => {
        const data = {
            message : "Data fetched successfully",
            url : url
        }
        callback(null,data);
    }, 1000);
}


function fetchDataPromise(url){
    return new Promise((resolve,reject) => {
        fetchDataCallback(url,(error,data) =>{
            if(data){
                resolve(data);
            }
            else{
                reject(error);
            }
        });
    });
}


fetchDataPromise('https://api.example.com/data')
.then(data => {
    console.log('Data :', data);
})
.catch(error => {
    console.log('Error :', error);
})

