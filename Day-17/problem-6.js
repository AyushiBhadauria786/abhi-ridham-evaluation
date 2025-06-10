// Write a JavaScript function to create a table, accept row and column numbers,
// and input row-column numbers as cell content (e.g. Row-0 Column-0).

//here this function will take input from user for row and column number and create table that according to 
//input 

function createTable(){
    let numRows = window.prompt("Input number of rows",1);
    let numCols = window.prompt("Input number of columns",1);

   const table = document.createElement('table');
   table.setAttribute('border','1')

   for(let i = 0; i < numRows; i++){
    const row = document.createElement('tr')

    for(let j = 0; j < numCols; j++){
        const cell = document.createElement("td");
        cell.textContent = `Row-${i} Column-${j}`;
        row.appendChild(cell)
    }
    table.appendChild(row)
   }
   document.body.appendChild(table)
}