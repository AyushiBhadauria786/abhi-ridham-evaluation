// Debounce Example

let count = 0;

const GetData = () => {
    console.log("getting your data", count++);
};


const debouncing = function (fn,delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments
        clearTimeout(timer);
        timer = setTimeout(() => {
            GetData.apply(context, arguments)
        },delay)
    }
}


const betterFun = debouncing(GetData,1000);


// Throttling Example

let Counting = 0;

const Resized = (() => {
    console.log("resizes screen",Counting++)
})


const Throttling = function(fn,delay){
    let timer;
    return function(){
        let context = this,
        args = arguments
        if(!timer){
            fn.apply(context,args)
            timer = true;
            setTimeout(()=>{
                timer = false
            },delay)
        }
    }
}

window.addEventListener("resize",Throttling(Resized,1000));