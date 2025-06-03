// Write a JavaScript function that ensures only a specified number of asynchronous 
// requests are made simultaneously.

const apiRequest = (id, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Request ${id} completed in ${time}ms`)
        },time)
    })
}

//using queue
const makeRequest = (requests, maxConcurrent) => {
    const results = [];
    let running = 0;
    let currentIndex = 0;

    return new Promise((resolve) => {
        const processNext = () => {
            if(currentIndex >= requests.length && running === 0){
                resolve(results);
                return
            }

            if(running < maxConcurrent && currentIndex < requests.length){
                running++;
                const index = currentIndex;
                const request = requests[currentIndex];
                currentIndex++

                request().then((result) => {
                    results[index] = result;
                    running--;
                    processNext();
                })
            }
        };

        for(let i = 0; i < maxConcurrent; i++){
            processNext();
        }
    })
}


const requests = [
    () => apiRequest(1, 100),
    () => apiRequest(2, 500),
    () => apiRequest(3, 1500),
    () => apiRequest(4, 1000),
    () => apiRequest(5, 2000),
];

makeRequest(requests,2).then((results) => {
    console.log("Results:",results);
});



//Using Promise.all

const throttledAPI = async (requests,maxConcurrent) => {
    const results = []
    const executing = new Set();

    for(const request of requests){
        const promise = request().then((result) => {
            executing.delete(promise);
            return result;
        });

        executing.add(promise);
        results.push(promise);

        if(executing.size >= maxConcurrent){
            await Promise.race(executing);
        }
    }

    return Promise.all(results);
};

throttledAPI(requests, 2).then((results) => {
    console.log("Results:", results);
});