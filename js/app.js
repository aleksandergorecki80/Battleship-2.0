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
  boardFieldsTaken: [],

  markFieldsAsTaken: function(object) {
    // console.log(object);
  },

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


//              ------    Ships section     --------------
// Single Ships

function SingleShip() {
   this.ship = [];

  this.buildNewShip = function() {
    this.ship.row = 9;
    // this.ship.row = Math.floor(Math.random() * 10);
    // this.ship.column = Math.floor(Math.random() * 10);
    this.ship.column = 9;
    console.log("Starting point", this.ship.column, this.ship.row);
    return [{ id: 1, row: this.ship.row, column: this.ship.column }];
  };

  this.markTheField = function(newField) {
    console.log('newField in mark new field', newField);
    newField.forEach(cellId => {
      document
        .getElementById(`${cellId.row}-${cellId.column}`)
        .classList.add("marked");
    });
  };
  this.addNewShip = function() {
    this.ship = this.buildNewShip();
    
    console.log(this.ship);
  };
}

// Double ship
function DoubleShip() {
  SingleShip.call(this);

  // Function determins next move 0-right 1-down 2-left 3-up
  this.choseDirection = function() {
    return Math.floor(Math.random() * 4);
  };

  // Check if a move is posible
  this.checkMove = function(direction, previousField) {
      switch (direction) {
      case 0:
        return this.ship[previousField].column + 1 < 10;
        break;
      case 1:
        return this.ship[previousField].row + 1 < 10;
        break;
      case 2:
        return this.ship[previousField].column - 1 >= 0;
        break;
      case 3:
        return this.ship[previousField].row - 1 >= 0;
        break;
    }
  };

  this.addNewField = function(direction, previousField){
      switch (direction) {
      case 0:
        return [...this.ship, {
          id: this.ship[previousField].id + 1, 
          row: this.ship[previousField].row, 
          column: this.ship[previousField].column + 1
        
        }];
        break;
      case 1:
        return [...this.ship, {
          id: this.ship[previousField].id + 1, 
          row: this.ship[previousField].row - 1, 
          column: this.ship[previousField].column
        }];
        break;
      case 2:
        return [...this.ship, {
          id: this.ship[previousField].id + 1, 
          row: this.ship[previousField].row, 
          column: this.ship[previousField].column - 1
        }];
        break;
      case 3:
        return [...this.ship, {
          id: this.ship[previousField].id + 1, 
          row: this.ship[previousField].row - 1, 
          column: this.ship[previousField].column
        }];
        break;
    }
  };
}

//  4
// const quadrupleShip = new QuadrupleShip();
// quadrupleShip.addNewShip();
// quadrupleShip.nextMoveDirection(3);

// // 3
// const firstTripleShip = new TripleShip();
// firstTripleShip.addNewShip();
// firstTripleShip.nextMoveDirection(2);

//  // 3
// const secondTripleShip = new TripleShip();
// secondTripleShip.addNewShip();
// secondTripleShip.nextMoveDirection(2);

// // 2
const firstDoubleShip = new DoubleShip();

firstDoubleShip.addNewShip();



let nextMove = false;
if(!nextMove){
  console.log('i cand marc it')
  const direction = firstDoubleShip.choseDirection();
  console.log("Direction =", direction);
  nextMove = firstDoubleShip.checkMove(direction, 0);
  console.log(nextMove);
}
  else{
    firstDoubleShip.markTheField(newField);
}


const newField = firstDoubleShip.addNewField(0,0);
console.log(newField);


// // 1
// const firstSingleShip = new SingleShip();
// firstSingleShip.addNewShip();

// console.log('Quadruple ship is ', quadrupleShip.ship);
// console.log('First triple ship is ', firstTripleShip.ship);
// console.log('Second triple ship is ', secondTripleShip.ship);
// console.log('First double ship is ', firstDoubleShip.ship);
// console.log('First single ship is ', firstSingleShip.ship);

// Adding taken fields to the grid
// view.markFieldsAsTaken(firstSingleShip.ship);
