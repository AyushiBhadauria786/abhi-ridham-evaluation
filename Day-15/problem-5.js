// 

//Solution 

//function that immediatly call after 10 seconds and loads content in webpage from api

(function() {
    const duration = 10;

    const redirectTo = 'https://jsonplaceholder.typicode.com/todos/1';

    let timeout;

    const resetTimeout = function () {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => location.href = redirectTo, duration * 1000);
    }
    resetTimeout()

    ['click','touchstart','mousemove'].forEach(element => {
        document.addEventListener(element,resetTimeout,false)
    });   
})();

