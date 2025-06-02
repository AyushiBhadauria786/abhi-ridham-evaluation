// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that 
// resolves with the response data.


function getRequest(url){
    return new Promise((resolve,reject) => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); 
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
    }); 
}

getRequest('https://api.example.com/data')
    .then(data => {
        console.log('Response data1: ' + JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error: ' + error)
    });



getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log("Response data2:" + JSON.stringify(data)))
    .catch(error => console.log('Error:' + error))


