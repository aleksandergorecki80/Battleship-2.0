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
    
    td.id = `${trId}td${i}`;
  }
}

for (let i = 0; i < 7; i++) {
  printRows(i);
}


const view = {
    displayMessage: function(msg){
        const messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location){
        const cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location){
        const cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

// Testing
view.displayMessage('This is a testing message');
view.displayHit("tr3td3");
view.displayMiss("tr6td4");