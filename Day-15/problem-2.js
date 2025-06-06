// Write a JavaScript program that uses a try-catch block to catch and handle a 
// 'SyntaxError' when parsing an invalid JSON string.

//Solution 1:

//Using instanceof we can check error and log msg for syntax error.

function parse_JSON(jsonString){
    try{
        const parseData = JSON.parse(jsonString)
        console.log("Parsed Data:",parseData);
    }catch(error){
        if(error instanceof SyntaxError){
            console.log("SyntaxError:",error.message);
        }else {
            console.log("Error",error.message);
        }
    }
}

const obj = {
    "name": "RK",
    "age": 23,
}

parse_JSON(obj);


const json = '{"name": "Ridham Kansara", "age": 30}'

parse_JSON(json);
parse_JSON('{"name": "Rowan Octave", "age": 30}'); 
parse_JSON('{"name": "Rowan Octave", "age": 30,}');



//Solution 2

//here we used custom error to define error in own words

function usingCustomError(jsonStr,customErr){
    if(typeof jsonStr !== "string"){
        throw new TypeError("Input must be a string");
    }
    if(jsonStr.trim() === ''){
        throw new Error("Input string can not be empty");
    }

    try {
        const parsed = JSON.parse(jsonStr);
        console.log("Json Parsed String:",parsed);
    } catch (error) {
        if(error instanceof SyntaxError){
            const errorMsg = customErr || `Invalid JSON format: ${error.message}`;
            console.error("Custom error:",errorMsg)
            throw new Error(errorMsg)
        }
        throw error;
    }
}

usingCustomError('{"name": "Rowan Octave", "age": 30}',"Value is not valid"); 
usingCustomError('{"name": Rowan Octave, "age": 30,}',"Value is not valid,please enter again");



