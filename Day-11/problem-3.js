// Write a JavaScript function that takes an array of URLs and downloads the
// contents of each URL in parallel using Promises.

const arrayOfUrl = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

function downloadContent(urls){
    const promises = urls.map(url => {
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
        })
    })
    return Promise.all(promises)
}

downloadContent(arrayOfUrl)
    .then(contents => console.log('Download contents using promises:',contents))
    .catch(error => {
        console.log('Error:',error.message);
    })



async function fetchUrls(urls){
    const results = [];
    for(const url of urls){
        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`HTTP error! Status:${response.status}`);
            }
            const data = await response.json();
            results.push(data);  
        } catch (error) {
            console.error(`Error fetching ${url}:`,error);
            results.push(null);
        }
    }
    return results;
}

fetchUrls(arrayOfUrl)
    .then(results => console.log("Results using async-await:",results))
    .catch(error => console.error("Failed to fetch:", error));