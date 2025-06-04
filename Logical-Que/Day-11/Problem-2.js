// Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.





const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];




function downloadContents(urls) {

    const Promises = urls.map((url) => {
        return new Promise((resolve,reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status : ${response.status}`)
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    })
})

    return Promise.all(Promises)

}


downloadContents(urls)
    .then(contents => {
        console.log('Download content', contents)
    })
    .catch(error => {
        console.log('Error', error.message)
    })



