let numRows = 0;
let numCols = 0;
let colorSelected; 

//creating a table body
//let grid = document.getElementById("grid");
//let newRow = document.createElement("tr");
//let square = document.createElement("td");

//Add a row
function addR() {
    //alert("Clicked Add Row")
    var table = document.getElementById("grid");
    var row = table.insertRow(table.rows.length);
    if(numRows == 0) {
    cell = row.insertCell(-1);
    cell.style.backgroundColor = "transparent";
    cell.onclick = function(){
        this.style.backgroundColor = colorSelected;
    };
    }
    if(numRows > 0){
    for(var i = 0; i < table.rows[0].cells.length; i++){
        cell = row.insertCell(i);
        cell.style.backgroundColor = "transparent";
        cell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
    }
    }
    numRows++;
}

//Add a column
function addC() {
    //alert("Clicked Add Col")
    var table = document.getElementById("grid");
    //numCols++;
    for(var i = 0; i < table.rows.length; i++) { //creating a new column for each row
        cell = table.rows[i].insertCell(table.rows[i].cells.length);
        cell.style.backgroundColor = "transparent";
        cell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }
    numCols++;
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
    let table = document.getElementById("grid");
    table.deleteRow(table.rows.length - 1);
    numRows--;
}

//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let table = document.getElementById("grid");
    for(i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(table.rows[i].cells.length - 1);
        //grid.removeChild(newRow);
    }
    numCols--;
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
} //given code is okay

function fill(){ //this function is to fill sqaures with appropriate color
    //alert("Clicked Fill All")
    let table = document.querySelectorAll("td").forEach(td=> td.style.backgroundColor = document.getElementById("selectedID").value);
}

function clearAll(){
    //alert("Clicked Clear All")
    let table = document.querySelectorAll("td").forEach(td=> td.style.backgroundColor = "transparent");
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    var allCells = document.querySelectorAll("td");
    for(var i = 0; i < allCells.length; i++){
        if(allCells[i].style.backgroundColor == "transparent"){
            allCells[i].style.backgroundColor = document.getElementById("selectedID").value;
        }
    }
}