// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.


function FetchDataWithRetry(url, MaxRetries) {
    return new Promise((resolve, reject) => {
        let retries = 0;

        const FetchData = () => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error ! Status ${response.status}`)
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    retries++;
                    if (retries <= MaxRetries) {
                        console.log(`request failed. Retrying (${retries}/${MaxRetries})...`)

                        FetchData();
                    }
                    else {
                        reject(new Error(`Failed after ${MaxRetries} retries. Error: ${error.message}`));
                    }
                })
        };
        FetchData();
    })
}


// const url = 'https://jsonplaceholder.typicode.com/posts';
const url = 'https://jsonplaceholder.typicode.com/posts3';

const MaxRetries = 3;


FetchDataWithRetry(url, MaxRetries)
    .then(data => {
        console.log(`Data :`, data)
    })
    .catch(error => {
        console.log(`Error :`, error.message);
    })



    