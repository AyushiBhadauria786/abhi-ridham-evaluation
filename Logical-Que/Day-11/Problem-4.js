// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.


function repeatedlyFunction(fn,interval){

    fn();
    const intervalId =  setInterval(fn,interval)

    return function StopExecution(){
        clearInterval(intervalId);
        console.log('Execution stopped')
    }
}

const interval = 1000;

function PrintMessage(){
    console.log('Executing the function ....')
}


const StopExecution = repeatedlyFunction(PrintMessage,interval);


setTimeout(()=>{
    StopExecution();
},4000)