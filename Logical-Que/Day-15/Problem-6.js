// Simulate a deadlock by nesting await on unresolved Promises within an async function. 



//  Single unresolved Promise


const never = new Promise(() => {
    
    // neither resolve nor reject is ever called 
})


async function deadlock() {
    console.log('Before first await');
    await never;                             //  hangs here forever

    console.log('(this will never point)');
    await never;                              //  would hang here too, if we ever got past the first
}

deadlock();




// Mutual “lock” between two functions


let resolveA, resolveB;

const A = new Promise(r => resolveA = r);
const B = new Promise(r => resolveB = r);



async function fnA() {
    console.log('fnA : waiting on B');
    await B;
    console.log('fnA : got B, now waiting on A');
    await A;
    console.log('fnA : done')
}


async function fnB() {
    console.log('fnB : waiting on A');
    await A;
    console.log('fnA : got A, now waiting on B');
    await B;
    console.log('fnB : done')
}


fnA();
fnB();