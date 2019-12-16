// Printing the grid

// Function prints rows
function printRows(id) {
    const game = document.getElementById("game");
    var tr = document.createElement("tr");
    game.appendChild(tr);
    // div.classList.add("field");
    tr.id = id;
    printColumns(tr.id); // Passing row id
  }
  
  //   //Funstion rints columns
  function printColumns(trId) {
    for (let i = 0; i < 10; i++) {
      const tr = document.getElementById(trId);
      var td = document.createElement("td");
      tr.appendChild(td);
  
      td.id = `${trId}-${i}`;
      td.innerHTML = `${trId}-${i}`; // to do usunięcia
    }
  }
  
  // Printing a board
  for (let i = 0; i < 10; i++) {
    printRows(i);
  }