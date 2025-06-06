// Fetches multiple APIs in both parallel and sequential order to compare performance and execution time.





const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
]



// Fetch parallel 



async function FetchParallel(urls) {

    const startTime = performance.now();        // Start Measuring time
    

    const result = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));   // fetch and store data of url

    const endTime = performance.now();      // End Measuring time

    console.log(`Parallel fetch completed in ${(endTime - startTime).toFixed(2)} ms`);     // end - start so we get execution time
    return result;
}

FetchParallel(urls).then((result) => console.log("parallel result", result));



// Fetch sequential 


async function FetchSequential(urls) {
    
    const startTime = performance.now();  // Start Measuring time
    
    let results = [];

    for(const url of urls){
        const response = await fetch(url);           // fetch the data from url
        const data = await response.json();            // convert response to json
        results.push(data);
    }

    const endTime = performance.now();    // End Measuring time

    console.log(`Sequential fetch completed in ${(endTime - startTime).toFixed(2)} ms`);     // end - start so we get execution time
    return results;
}

FetchSequential(urls).then((results) => console.log("Sequential Result", results));

