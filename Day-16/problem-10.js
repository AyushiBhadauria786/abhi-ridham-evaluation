// Demonstrate a dynamic curry function which takes arguments and calls data from api and 
// give response to user as per input given for api data.

//Solution

//here we can dynamically change the api value as per user need and fetch perticulat data using currying function

function dynamicCurryFunc(para1){
    return async function (para2){
        const url = `https://jsonplaceholder.typicode.com/${para1}/${para2}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            return console.log(data);
        } catch (err) {
            return console.log(err);
        }
    }
}

dynamicCurryFunc('todos')(1);
dynamicCurryFunc('todos')(5);
dynamicCurryFunc('todos')(10);
dynamicCurryFunc('posts')(7);