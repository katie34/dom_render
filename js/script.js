let numRows = 0;
let numCols = 0;
let colorSelected; 
//rememeber to use correct function names

/*/create button functions
addR.addEventListener("click", addR);
addC.addEventListener("click", addC);
removeR.addEventListener("click", removeR);
removeC.addEventListener("click", removeC);
fillU.addEventListener("click", fillU);
fill.addEventListener("click", fill);
clearAll.addEventListener("click", addR);
addRow.addEventListener("click", clearAll); */

//creating a table body
let grid = document.getElementById("grid");
let newRow = document.createElement("tr");
let square = document.createElement("td");

//Add a row
function addR() {
    //alert("Clicked Add Row")
    numRows++;
    let newRow = document.createElement("tr");
    newRow.classlist.add("R");
    //grid.appendChild(newRow);

    if(numCols === 0){
        numCols++;
    }

    for (let i = 0; i < numCols; i++){
        let square = document.createElement("td");
        square.classList.add("C")
        newRow.appendChild(createSquare("square")); //does this need one parameter?
        console.log(numCols);
    }
    document.getElementById("grid").appendChild(newRow);
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    numCols++;
    let newRow;

    if(numRows === 0){ //conditional statement if no rows already exist
        numRows++;
        newRow = document.createElement("tr");
        newRow.classList.add("R");
        document.getElementById("grid").appendChild(newRow);
    }
    newRow = document.getElementsByClassName("R");

    for(let i = 0; i < numRows; i++){ //creating a new column for each row
        let col = document.createElement("td");
        col.classList.add("C")
        newRow[i].appendChild(col);
    }

}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")

    if(numRows > 0){
        if(numRows == 1){
            numCols = 0;
        }
        numRows--;
        let grid = document.getElementById("grid"); //this needs to be changed to grid
        let newRow = grid.lastElementChild;
        grid.removeChild(newRow);
    }
}

//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let newRow;
    if(numCols == 1){
        let grid = document.getElementById("grid");
        for(let i = 0; i < numRows; i++){
            let newRow = grid.lastElementChild;
            grid.removeChild(newRow);
        }
        numRows = 0;
        numCols--;
    }
    if(numCols > 0){
        numCols--;
        newRow = document.getElementsByClassName("R");

        for(let i = 0; i < numRows; i++){
            let col = newRow[i].lastElementChild
            newRow[i].removeChild(col);
        }
    }
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
} //given code is okay

function fill(){ //this function is to fill sqaures with appropriate color
    //alert("Clicked Fill All")
    let newRow = document.getElementsByTagName("tr");
    for(const element of newRow){
        let col = element.getElementsByTagName("td");
        for(let i = 0; i < numCols; i++){
            col[i].style.background = colorSelected;
        }
    }
}

function clearAll(){
    //alert("Clicked Clear All")
    let newRow = document.getElementsByTagName("tr");
    for(const element of newRow){
        let col = element.getElementsByTagName("td");
        for(let i = 0; i < numCols; i++){
            col[i].style.background = "";
        }
    }
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    let newRow = document.getElementsByTagName("tr");
    for(const element of newRow){
        let col = element.getElementsByTagName("td");
        for(let i = 0; i < numCols; i++){
            if(col[i].style.background == ""){
                col[i].style.background = colorSelected;
            }
        }
    }
}