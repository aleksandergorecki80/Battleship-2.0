// Printing the grid

// Function prints rows
function printRows(id) {
    const game = document.getElementById("game");
    var tr = document.createElement("tr");
    game.appendChild(tr);
    tr.id = id;
    printColumns(tr.id); // Passing row id
  }
  
  //   //Funstion prints columns
  function printColumns(trId) {
    for (let i = 0; i < 10; i++) {
      const tr = document.getElementById(trId);
      var td = document.createElement("td");
      tr.appendChild(td);
      td.classList.add('field');
      td.id = `${trId}-${i}`;
    }
  }
  
  // Printing a board
  for (let i = 0; i < 10; i++) {
    printRows(i);
  }