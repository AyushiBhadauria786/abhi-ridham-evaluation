// Build a task runner that runs async tasks with a maximum number of concurrent executions.



async function RunTask(Tasks,ConcurrencyLimit) {
    
    let index = 0;
    let active = 0;

    return new Promise((resolve,reject) => {
        let results = [];


        function runNext(){
            if(index >= Tasks.length && active === 0){
                return resolve(results);
            }


            while(active < ConcurrencyLimit && index < Tasks.length){
                const currentIndex = index ++;
                const task = Tasks[currentIndex];
                active++;

                task()
                .then(result => {
                    results[currentIndex] = result;
                })
                .catch(reject)
                .finally(() => {
                    active--;
                    runNext();
                });
            }
        }

        runNext();
    })

}



const dummyTask = Array.from({length : 10 },  (_,i) => () => {
    return new Promise(resolve => {
        setTimeout(()=>resolve(`task ${i + 1} done`),Math.random() * 2000)
    })
})

RunTask(dummyTask,4).then(console.log)