// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.


function MakeGetRequest(url){
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP Error ! Status ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            resolve(data)
        })
        .catch(error => {
            reject(error)
        })
    })
}


const urls = "https://example.com/data"


MakeGetRequest(urls)
.then(Res => {
    console.log(`Response :`, Res);
})
.catch(error => {
    console.log(`Error :`, error.message);
});




// Using async-await


async function GetData(url) {
    try {
        const response = await fetch("https://example.com/data");
        if(!response.ok){
            throw new Error(`HTTP error ! Status ${response.status}`)
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error("there was a problem with your fetch request",error)
    } 
}

GetData();