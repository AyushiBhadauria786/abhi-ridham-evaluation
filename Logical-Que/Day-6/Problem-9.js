// Organizing elements of an array of objects into groups based on the value of a specified property(Group by Property in Array of Objects)



const arr = [
    { name: 'Abhi', age: 25, city: 'Ahmedabad' },
    { name: 'Jay', age: 30, city: 'Surat' },
    { name: 'Raj', age: 25, city: 'Junagadh' },
    { name: 'Mihir', age: 30, city: 'Rajkot' }
];


  
// Using for Each 

function GroupByAge(arr){
    const Group = {};
    arr.forEach(obj => {
        const key = obj.age;
        if(!Group[key]){
            Group[key] = [];
        }
        Group[key].push(obj)
        
    })
    return Group;
}

console.log(GroupByAge(arr));



// Using Object GroupBy method




// Using reduce method



const groupedItems = arr.reduce((acc, item) => {
    const key = item.age; 
    acc[key] = acc[key] || []; 
    acc[key].push(item); 
    return acc;
}, {});

console.log(groupedItems);