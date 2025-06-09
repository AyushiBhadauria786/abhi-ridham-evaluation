// Write a function that retries an API call up to 3 times if it fails.

const api = "https://jsonplaceholder.typicode.com/todos/1";

let attempt = 0;

async function fetchData(url, retries) {
    try {
        attempt++;

        if(attempt <= 3){
            throw new Error('Network failure');
        }

        const response = await fetch(url);
        console.log(`Success: ${response.status}`)
        return response.json();
    } catch (error) {
        console.log(`Attempt ${attempt} failure with error: ${error.message}.`)
        if(retries > 0){
            console.log('Retrying immediately');
            return fetchData(url,retries - 1);
        }else {
            throw new Error(`All retries failed after ${attempt}`)
        }
    }
}

fetchData(api,3).catch(console.error);

const api2 = "https://jsonplaceholder.typicode.com/todos/5";
fetchData(api2,5).catch(console.error);
