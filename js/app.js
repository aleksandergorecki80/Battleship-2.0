// Printing the grid

// Function prints rows
function printRows(id) {
    const game = document.getElementById("game");
    var tr = document.createElement("tr");
    game.appendChild(tr);
    // div.classList.add("field");
    tr.id = `tr${id}`;
  }
  

//   //Funstion rints columns
//   function printColumns(id) {
//     const tr = document.getElementById(`tr${id}`);
//     var tr = document.createElement("td");
//     game.appendChild(tr);
//     // div.classList.add("field");
//     // div.id = id;
//   }

  for (let i = 0; i < 7; i++) {
    printRows(i);  

  }

//   printColumns()