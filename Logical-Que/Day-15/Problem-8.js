// Implement a fetch wrapper that aborts the request if it exceeds a timeout.




async function FetchWithTimeout(url,timeout){

    const controller = new AbortController();                      // for abort request
    const timer = setTimeout(() => controller.abort(),timeout);


    try{
        const response = await fetch(url,{signal : controller.signal})        // fetch data with control signal
        clearTimeout(timer);

        if(!response.ok){
            throw new Error("Fetch Failed")                   // if fetch failed
        }
        return await response.json();
    }

    catch(error){

        if(error.name === 'AbortError'){                 // if error name is AbortError than it log request time out
            throw new Error("Request time out")
        }
        throw error;
    }

}


let url = 'https://jsonplaceholder.typicode.com/posts/'


FetchWithTimeout(url,2000)              // call the function
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})