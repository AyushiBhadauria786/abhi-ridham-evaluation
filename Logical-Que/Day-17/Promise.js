// resolve CallbackHell with promise chain


// promise chain example

function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 1 is completed");
            resolve();
        },1000)
    })
}

function step2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 2 is completed");
            resolve()
        },2000)
    })
}

function step3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 3 is completed");
            resolve();
        },3000)
    })
}


step1()
.then(step2)
.then(step3)
.then(() => console.log("all steps Completed"))



// api call using promise


fetch('https://jsonplaceholder.typicode.com/users/1')
.then((response) => {
    if(!response.ok){
        throw new Error(`HTTP Error !Status ${response.status}`)
    }
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error)
})