// Write a JavaScript program to implement a function that retries a failed asynchronous operation 
// with increasing delays between attempts.


async function retryWithDelay(asyncFunction, retries, delay) {
    for(let attempt = 1; attempt <= retries; attempt++){
        try{
            return await asyncFunction();
        }catch(error){
            console.error(`Attempt ${attempt} failed:`,error.message);

            if(attempt === retries){
                throw new Error('All retries failed');
            }

            await new Promise((resolve) => setTimeout(resolve,delay * attempt));
        }
    }
}


const simulateAsyncTask = async () => {
    if(Math.random() > 0.7){
        return 'Sucess!';
    }else {
        throw new Error('Random failure')
    }
}

retryWithDelay(simulateAsyncTask,6,1000)
    .then((result) =>console.log('Operation succeed from 1:',result))
    .catch((error) => console.error('Operation failed from 1',error.message));



//Solution 2

async function retryWithExponentialBackOff(func, retries, initialDelay) {
    let delay = initialDelay

    for(let attempt = 1; attempt <= retries; attempt++){
        try{
            return await func();
        }catch(error){
            console.error(`Attempt ${attempt} failed:`,error.message);

            if(attempt === retries){
                throw new Error("All retries failed");
            }

            await new Promise((resolve) => setTimeout(resolve, delay));
            delay *= 2;
        }
    }
}


retryWithExponentialBackOff(simulateAsyncTask,5,500)
    .then((result) => console.log("operation succeed from 2:",result))
    .catch((error) => console.error("Operation failed from 2:",error.message));