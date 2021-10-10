let numRows = 0;
let numCols = 0;
let colorSelected; 

//get first element in the body
var body = document.getElementsbyTagName("body")[0];

//creating the table
var table = document.createElement('TABLE');

//creating a table body
var tblB = document.createElement('TBODY');

//appending tablebody to the table
table.appendChild(tblB);

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