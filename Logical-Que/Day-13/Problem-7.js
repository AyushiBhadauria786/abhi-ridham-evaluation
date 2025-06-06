// Handles errors in async functions using try...catch for clean and controlled error flow


function AsyncTask(taskName,time,shouldFail = false){                //  function with Parameters
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(shouldFail){
                reject(`Error in ${taskName}`)
            }
            else{
                resolve(`${taskName}  Completed`)
            }
        },time)
    })
}



// function using try catch  to handle errors

async function ExecuteTask() {                           // async function

    try {
        const result1 = await AsyncTask("Task-1",1000,false);             // wait until AsyncTask complete
        console.log(result1);

        const result2 = await AsyncTask("Task-2",1000,true);           // wait until AsyncTask complete
        console.log(result2);
        
    } catch (error) {
        console.error(error);
    }
    finally{
        console.log("Execution Finished")                      // finally it always execute 
    }
    
}

ExecuteTask();                          