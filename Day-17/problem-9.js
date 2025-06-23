// Write a custom implementation of reduce() without using in-built ones.

Array.prototype.myReduce = function(callback, initialValue){
    if(typeof callback !== 'function'){
        throw new TypeError('Callback must be a function');
    }

    const array = this;
    const length = array.length;

    let accumlator = initialValue !== undefined ? initialValue : array[0];

    for(let i = initialValue !== undefined ? 0 : 1; i < length; i++){
        if(i in array){
            accumlator = callback.call(undefined, accumlator, array[i], i, array);
        }
    }
    return accumlator
}
