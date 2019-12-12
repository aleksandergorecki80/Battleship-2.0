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
  }
}

// Printing a board
for (let i = 0; i < 10; i++) {
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

// Testing board
view.displayMessage('This is a testing message');
view.displayHit("3-3");
view.displayMiss("6-4");


// Ships

function SingleShip(){
  // this.row = row;
  // this.column = column;
  this.ship = [];

  this.addNewShip = function(){
      this.ship.row = Math.floor(Math.random()*10);
      this.ship.column = Math.floor(Math.random()*10);
      this.ship.push({row: this.ship.row, column: this.ship.column})
    }

  this.markTheField = function(){
    console.log(this.ship);
    this.ship.forEach(id => {
      console.log(id);
      document.getElementById(`${id.row}-${id.column}`).classList.add("marked");
    })
  }
}

function DoubleShip(){
  SingleShip.call(this);

}



const firstSingleShip = new SingleShip();
firstSingleShip.addNewShip();
firstSingleShip.markTheField();



// const firstDoubleShip = new DoubleShip()
// firstDoubleShip.addNewShip();
// console.log(firstDoubleShip.markTheField())



// Function determins next move 1-right 2-down 3-left 4-up
function nextMoveDirection(){
  return Math.floor(Math.random()*4);
}


// Function checks if next move is posible
function isNextMovePosible(move){
  return move<=10 && move>0;
}


const nextMoveDirectionIs = nextMoveDirection();


// console.log(nextMoveDirectionIs); 
// console.log(isNextMovePosible(11)); 
// console.log(row, column); 

