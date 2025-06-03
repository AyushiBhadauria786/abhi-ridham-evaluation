// Write a JavaScript program that displays a "loading" message while waiting for an 
// async operation to complete.


function asyncOpeation(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(resolve){
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => {
                    console.log("data",data)
                    const filterTitle = data?.map(item => item?.title);
                    console.log(filterTitle);
                })
                .catch(error => console.log(error))
            }else{
                reject("Promise not resolved")
            }
        },3000);
    });
}


async function loadSpinner() {
    console.log('Loading...');
    const result = await asyncOpeation()
    console.log(result);
}

loadSpinner();