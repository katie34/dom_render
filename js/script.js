let numRows = 0;
let numCols = 0;
let colorSelected; 

//create button functions
addRow.addEventListener("click", addR);
addCol.addEventListener("click", addC);
removeRow.addEventListener("click", removeR);
removeCol.addEventListener("click", removeC);
fillColorAll.addEventListener("click", fillU);
fillColor.addEventListener("click", fill);
clearAllSquares.addEventListener("click", addR);
addRow.addEventListener("click", clearAll);

//creating the table
let table = document.createElement("table");

//creating a table body
let grid = document.getElementById("grid");

//squares 
let squares = document.getElementsByClassName("squares");

//appending tablebody to the table
grid.appendChild(table);

//Add a row
function addR() {
    alert("Clicked Add Row")
    let newRow = document.createElement("tr");
    newRow.classlist.add("row");
    grid.appendChild(newRow);

    for (var i = 0; i < squares; i++){
        newRow.appendChild(createSquare("squares"));
    }
}
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}