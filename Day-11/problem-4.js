// Write a JavaScript program to implement a function that executes a given 
// function repeatedly at a fixed interval using 'setInterval()'.


//Soolution 1

function repeatFunction(func, interval){
    func();

    const intervalId = setInterval(func,interval);
    return function stopExecution() {
        clearInterval(intervalId);
        console.log('Execution stopped');
    }
}

const intervalTime = 1000;

function printMessage(){
    console.log('Excuting the function..');
}

const stopExecution = repeatFunction(printMessage, intervalTime);
setTimeout(() => {
    stopExecution();
}, 4000);


//Solution 2

const timer = document.getElementById('timer');
const timeUp = document.getElementById('timeup')
let currentTime = 10;


function countDown() {
    currentTime--;
    timer.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId);
        timeUp.textContent = "Time is Up!!";
        
    }
}

let timerId = setInterval(countDown, 1000)