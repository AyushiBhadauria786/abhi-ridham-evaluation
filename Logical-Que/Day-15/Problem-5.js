// Write a loop that retries an async operation until it succeeds or hits a retry limit.




async function FetchWithRetry(url,maxRetries,delay) {
    
    for(let attempt = 1; attempt <= maxRetries; attempt++){          // for loop until maxretries

        try {
            
            const response = await fetch(url);               // fetch data
            if(!response.ok){
                throw new Error(`HTTP Error !Status  ${response.status}`);

            }
            
            const data = await response.json();             // convert to json
            return data;

            
        } catch (error) {
            console.error(`Attempt : ${attempt} failed : `, error.message);          // error message with attempt

            if(attempt < maxRetries){                                     // attempt is greater than maxretries condition
                await new Promise(res => setTimeout(res,delay));
            }
            else {
                throw new Error("All retries failed ")          // after all retries failed
            }
        }
    }
}


let url = "https://ajsonplaceholder.typicode.com/users";


FetchWithRetry(url, 5, 1000)
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Final error:", error.message));
