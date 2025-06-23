// Simple callbackhell 


function greet(callback){
    console.log("hii abhi");
    callback();
}

function Bye(callback){
    console.log("Bye Bye ...")
    callback();
}


greet(function(){
    Bye(function (){
        console.log("Both are Completed");
    });
});



// Callbackhell with setTimeout



// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 is completed")
//         callback();
//     },1000)
// }


// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 is completed")
//         callback();
//     },2000)
// }


// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 is completed");
//         callback();
//     },3000)
// }



// task1(function() {
//     task2(function(){
//         task3(function() {
//             console.log("All task completed");
//         });
//     });
// });



// dependend task Callbackhell



function taskA(callback){
    setTimeout(() => {
        console.log("Task A completed")
        callback("resultA")
    },1000)
}



function taskB(resultA,callback){
    setTimeout(() => {
        console.log("Task B completed, using",resultA)
        callback("resultB")
    },2000)
}



function taskC(resultB,callback){
    setTimeout(() => {
        console.log("Task C completed, using",resultB)
        callback("resultC")
    },3000)
}


taskA(function(resultA){
    taskB(resultA,function(resultB){
        taskC(resultB,function(resultC){
            console.log('final result', resultC)
        })
    })
})




//  callbackhell on api call



// function getUser(callback){
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(user => {
//         console.log('User Fetched :', user);
//         callback(user)
//     })
// }


// function getPosts(userId,callback){
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then(res => res.json())
//     .then(post => {
//         console.log('post Fetched :', post);
//         callback(post)
//     })
// }

// function getComments(postId,callback){
//     fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
//     .then(res => res.json())
//     .then(comment => {
//         console.log('comment Fetched :', comment);
//         callback(comment)
//     })
// }




// getUser(function(user){
//     getPosts(user.id,function(post){
//         getComments (post[0].id,function(comment){
//             console.log("Done! Final comments:", comment);
//         })
//     })
// })