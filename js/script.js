let numRows = 0;
let numCols = 0;
let colorSelected; 

//get first elements in the body
var body = document.getElementsbyTagName("body");
    addRow = body[0],
    addCol = body[1],
    removeRow = body[2],
    removeCol = body[3],
    fillColorAll = body[4],
    fillColor = body[5],
    clearAllSquares = body[6];

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

//appending tablebody to the table
grid.appendChild(table);

//Add a row
function addR() {
    alert("Clicked Add Row")
    for (var i = 0; i < 10; i++)
    var tr = document.createElement('TR');
    tblB.appendChild(tr);

    for (var j = 0; j < 10; j++) {
        var td = document.createElement('TD')
        tr.appendChild(td);
    }
}
body.appendChild(table);


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