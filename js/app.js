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
    this.ship.row = Math.floor(Math.random() * 10);
    this.ship.column = Math.floor(Math.random() * 10);
    return [{ id: 1, row: this.ship.row, column: this.ship.column }];
  };

  this.addNewShip = function() {
    this.ship = this.buildNewShip();
  };

  //    funkcja zaznacza statek na planszy - do wywalenia
  this.markTheField = function(newField) {
    newField.forEach(cellId => {
      document
        .getElementById(`${cellId.row}-${cellId.column}`)
        .classList.add("marked");
    });
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
  this.checkMove = function(direction, previousArrPosition) {
    switch (direction) {
      case 0:
        return this.ship[previousArrPosition].column + 1 < 10;
        break;
      case 1:
        return this.ship[previousArrPosition].row + 1 < 10;
        break;
      case 2:
        return this.ship[previousArrPosition].column - 1 >= 0;
        break;
      case 3:
        return this.ship[previousArrPosition].row - 1 >= 0;
        break;
    }
  };

  // Adding a next field to a existing ship
  this.addNewField = function(direction, previousArrPosition) {
    switch (direction) {
      case 0:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row,
            column: this.ship[previousArrPosition].column + 1
          }
        ];
        break;
      case 1:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row - 1,
            column: this.ship[previousArrPosition].column
          }
        ];
        break;
      case 2:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row,
            column: this.ship[previousArrPosition].column - 1
          }
        ];
        break;
      case 3:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row - 1,
            column: this.ship[previousArrPosition].column
          }
        ];
        break;
    }
  };

  // Updating a ship
  this.updateShip = function(updatedShip) {
    this.ship = updatedShip;
  };
}

// Triple ship
function TripleShip() {
  DoubleShip.call(this);
}

//  4
// const quadrupleShip = new QuadrupleShip();
// quadrupleShip.addNewShip();
// quadrupleShip.nextMoveDirection(3);

// // 3
// const firstTripleShip = new TripleShip();
// firstTripleShip.addNewShip();
// firstTripleShip.nextMoveDirection(2);

//     ---  TRIPLE SHIP    ---
function addingTripleShipsToTheGrid() {
  const tripleShip = new TripleShip(); // initialisation of double ship
  tripleShip.addNewShip(); //  starting new ship

  for (let i = 0; i < 2; i++) {
    let nextMove = false;
    let direction = "";
    while (!nextMove) {
      direction = tripleShip.choseDirection(); // choosing diration of marking
      nextMove = tripleShip.checkMove(direction, i); // checking if move is possible
    }

    const newField = tripleShip.addNewField(direction, i); // Adding new field to array
    tripleShip.updateShip(newField);
    tripleShip.markTheField(newField); // marking the ship
  }

  console.log(tripleShip.ship);
}
addingTripleShipsToTheGrid();

// //     ---  DOUBLE SHIP    ---
function addingDoubleShipsToTheGrid() {
  const firstDoubleShip = new DoubleShip(); // initialisation of double ship
  firstDoubleShip.addNewShip(); //  starting new ship

  let nextMove = false;
  let direction = "";
  while (!nextMove) {
    direction = firstDoubleShip.choseDirection(); // choosing diration of marking
    nextMove = firstDoubleShip.checkMove(direction, 0); // checking if move is possible
  }

  const newField = firstDoubleShip.addNewField(direction, 0); // Adding new field to array
  firstDoubleShip.updateShip(newField);
  firstDoubleShip.markTheField(newField); // marking the ship
  console.log(firstDoubleShip.ship);
}
addingDoubleShipsToTheGrid();

// //    ---  SINGLE SHIP ---
// function addingSingleShipsToTheGrid() {
//   const singleShip = new SingleShip(); // initialisation of single ship
//   singleShip.addNewShip();
//   singleShip.markTheField(singleShip.ship);
// }
// addingSingleShipsToTheGrid();
