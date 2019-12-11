// Printing the grid

// Function prints rows
function printRows(id) {
  const game = document.getElementById("game");
  var tr = document.createElement("tr");
  game.appendChild(tr);
  // div.classList.add("field");
  tr.id = `tr${id}`;
  printColumns(`tr${id}`); // Passing row id 
}

//   //Funstion rints columns
function printColumns(trId) {
  for (let i = 0; i < 7; i++) {
    const tr = document.getElementById(trId);
    console.log(tr);
    var td = document.createElement("td");
    tr.appendChild(td);
    
    td.id = `td${i}`;
  }
}

for (let i = 0; i < 7; i++) {
  printRows(i);
}
