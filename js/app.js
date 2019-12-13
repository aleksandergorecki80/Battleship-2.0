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
  displayMessage: function(msg) {
    const messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// Testing board
view.displayMessage("This is a testing message");
view.displayHit("3-3");
view.displayMiss("6-4");

// Ships

function SingleShip() {
  // this.row = row;
  // this.column = column;
  this.ship = [];

  this.addNewShip = function() {
    this.ship.row = Math.floor(Math.random() * 10);
    this.ship.column = Math.floor(Math.random() * 10);
    this.ship.push({ id: 1, row: this.ship.row, column: this.ship.column });
    this.markTheField();
  };

  this.markTheField = function() {
    this.ship.forEach(cellId => {
      document.getElementById(`${cellId.row}-${cellId.column}`).classList.add("marked");
    });
  };
}

function DoubleShip() {
  SingleShip.call(this);

  // Function determins next move 0-right 1-down 2-left 3-up
  this.nextMoveDirection = function(numberOfMoves) {
    const moveDirection = Math.floor(Math.random() * 4);
    console.log(moveDirection);
    this.nextMove(moveDirection, numberOfMoves);
  };

  // Function checks if next move is posible
  this.nextMove = function(direction, numberOfMoves) {
    for(let i=0; i<numberOfMoves; i++){
      switch (direction) {
        case 0:
          if (this.ship.column + 1 < 10) {

            this.ship.push({ id: this.ship[i].id+1, row: this.ship[i].row, column: this.ship[i].column + 1 });
            this.markTheField();
          } else {
             this.nextMoveDirection();
          }
          break;
        case 1:
          if (this.ship.row + 1 <= 9) {
            this.ship.push({ id:2, row: this.ship[i].row + 1, column: this.ship[i].column });
            this.markTheField();
          } else {
            this.nextMoveDirection();
          }
          break;
        case 2:
          if (this.ship.column - 1 >= 0) {
            this.ship.push({ id:2, row: this.ship[i].row, column: this.ship[i].column - 1 });
            this.markTheField();
          } else {
            this.nextMoveDirection();
          }
          break;
        case 3:
          if (this.ship.row - 1 >= 0) {
            this.ship.push({ id:2, row: this.ship[i].row - 1, column: this.ship[i].column });
            this.markTheField();
          } else {
            this.nextMoveDirection();
          }
          break;
      }
    }
        
  };
}

function TripleShip(){
  DoubleShip.call(this);
}

function QuadrupleShip(){
  DoubleShip.call(this);
}

const quadrupleShip = new QuadrupleShip();
quadrupleShip.addNewShip();
quadrupleShip.nextMoveDirection(3);

const firstTripleShip = new TripleShip();
firstTripleShip.addNewShip();
firstTripleShip.nextMoveDirection(2);
const secondTripleShip = new TripleShip();
secondTripleShip.addNewShip();
secondTripleShip.nextMoveDirection(2);

const firstDoubleShip = new DoubleShip();
firstDoubleShip.addNewShip();
firstDoubleShip.nextMoveDirection(1);

const firstSingleShip = new SingleShip();
firstSingleShip.addNewShip();


console.log('First triple ship is ', firstTripleShip.ship);
console.log('First double ship is ', firstDoubleShip.ship);
console.log('First single ship is ', firstSingleShip.ship);
