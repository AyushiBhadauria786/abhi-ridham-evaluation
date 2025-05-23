// Check if year is leap year

let year = 2025;

// Using conditional statement

function LeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
        return "this is leap year";
    }
    else{
        return "this is not leap year";
    }
}

console.log(LeapYear(year));



// Using Ternary Operator


const isLeap = year => (year % 400 === 0) ? true : (year % 100 === 0) ? false : (year % 4 === 0);
console.log(isLeap(year));


// Using Date method

function LeapYearDate(year){
    const leap = new Date(year,1,29).getDate() === 29;
    if(leap){
        return "this is  leap year";
    }
    else{
        return "this is not leap year";
    }
}

console.log(LeapYearDate(year));