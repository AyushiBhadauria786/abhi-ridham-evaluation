// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a 
// combined result using Promises and 'Promise.all()'.

const API = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

//for fetching data from api
async function fetchDataFromAPI(url){
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTPS Error! Status: ${response.status}`);
    }
    return await response.json();
}

//used for one by one api calls
function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));
    return Promise.all(promises);
}


//Delaying our api call
setTimeout(() => {
    fetchMultipleAPIs(API)
        .then(result => {
            console.log('Combined Results:', result)
        })
        .catch(error => {
            console.log('Error:',error.message);
        })
}, 5000);

