let numRows = 0;
let numCols = 0;
let colorSelected; 

//creating a table body
//let grid = document.getElementById("grid");
//let newRow = document.createElement("tr");
//let square = document.createElement("td");

//Add a row
function addR() {
    var table = document.getElementById("grid");
    var table_row = table.insertRow(table.rows.length);
    if(numRows == 0){
    cell = table_row.insertCell(-1);
    cell.style.backgroundColor = "transparent";
    cell.onclick = function(){
        this.style.backgroundColor = colorSelected;
    };
    }
    if(numRows > 0){
    for(var i = 0;i<table.rows[0].cells.length;i++){
        cell = table_row.insertCell(i);
        cell.style.backgroundColor = "transparent";
        cell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
    }
    }
    numRows++;
}

//Adds a column
//iterates and inserts adjacent cell to each row
//sets click function to each cell to change color
//sets default color to transparent
function addC() {
    var table = document.getElementById("grid");
    for (var i = 0; i < table.rows.length; i++) {
        cell = table.rows[i].insertCell(table.rows[i].cells.length);
        cell.style.backgroundColor = "transparent";
        cell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
    }
    numCols++;
}

//Removes a row
//deletes last row of table
function removeR() {
    let table = document.getElementById("grid");
    table.deleteRow(table.rows.length - 1);
    numRows--;
}
//Remove a column
//iterate and delete last cell of each row
function removeC() {
    let table = document.getElementById("grid");
    for (i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(table.rows[i].cells.length - 1);
        }
    numCols--;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);   
}




//fill in all squares by selected color
//select all cells by tag and then for each apply background color
function fill(){
    let table = document.querySelectorAll("td").forEach(td=> td.style.backgroundColor = document.getElementById("selectedID").value);
}

//clear all color and return to white
function clearAll(){
    let table = document.querySelectorAll("td").forEach(td=> td.style.backgroundColor = "transparent");
}

//if cell is transparent which is default color then change color to selected color
function fillU(){
    var allCells = document.querySelectorAll("td");
    for(var i = 0;i < allCells.length;i++){
        if(allCells[i].style.backgroundColor == "transparent"){
            allCells[i].style.backgroundColor = document.getElementById("selectedID").value;
        }
    }
}