// Write a JavaScript program that converts a callback-based function to a Promise-based function.


//Solution 1:
function fetchDataWithCallback(url,callback){
    setTimeout(() => {
        const data = {
            message: 'Data fetched successfully',
            url : url
        };
        callback(null,data);
    },1000)
}

function fetchDataPromise(url){
    return new Promise((resolve,reject) => {
        fetchDataWithCallback(url,(error,data) => {
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
}

fetchDataPromise('https://api.example.com/data')
    .then(data => console.log('Data:',data))
    .catch(error => console.error('Error', error));


    
//Solution 2

function callbackBasedFunction(arg1, arg2, callback){
    setTimeout(() => {
        const result = arg1 + arg2;
        if(result % 2 !== 0){
            callback(null,result);
        }else {
            callback(new Error('Result is not odd!'),null);
        }
    },1000);
}

function promiseFunction(arg1,arg2){
    return new Promise((resolve,reject) => {
        callbackBasedFunction(arg1,arg2,(error,result) => {
            if(error){
                reject(error);
            }else {
                resolve(result);
            }
        })
    })
}

promiseFunction(2,3)
    .then(result => {
        console.log('Result:',result)
    })
    .catch(error => {
        console.log('Error:',error.message);
    });

promiseFunction(3,4)
    .then(result => {
        console.log('Result:',result)
    })
    .catch(error => {
        console.log('Error:',error.message);
    });