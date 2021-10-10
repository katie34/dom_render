let numRows = 0;
let numCols = 0;
let colorSelected; 
//rememeber to use correct function names

//create button functions
addRow.addEventListener("click", addR);
addCol.addEventListener("click", addC);
removeRow.addEventListener("click", removeR);
removeCol.addEventListener("click", removeC);
fillColorAll.addEventListener("click", fillU);
fillColor.addEventListener("click", fill);
clearAllSquares.addEventListener("click", addR);
addRow.addEventListener("click", clearAll);

//creating a table body
let grid = document.getElementById("grid");
let newRow = document.createElement("tr");
let square = document.createElement("td");

//Add a row
function addR() {
    alert("Clicked Add Row")
    numRows++;
    let newRow = document.createElement("tr");
    newRow.classlist.add("R");
    //grid.appendChild(newRow);

    for (let i = 0; i < numCols; i++){
        let square = document.createElement("td");
        square.classList.add("C")
        newRow.appendChild(createSquare("square"));
        HTMLFormControlsCollection.log(numCols);
    }
    document.getElementById("grid").appendChild(newRow);
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